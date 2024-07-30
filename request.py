import requests
import psycopg2

API_KEY = "45d63b2ce73c25eeb07a73b8373cd4a1"
REGIONS = "us"
MARKETS = "h2h"
ODDS_FORMAT = "decimal"
DATE_FORMAT = "iso"

DB_URL = "postgresql://sportsbet_owner:Fi5NfAO9SpZs@ep-proud-mud-a5tc8zao.us-east-2.aws.neon.tech/sportsbet?sslmode=require"


def fetch_data(url, params):
    response = requests.get(url, params=params)
    if response.status_code != 200:
        print(
            f"Failed to get data: status_code {response.status_code}, response body {response.text}"
        )
        return None
    return response.json()


def init_db_connection(db_url):
    conn = psycopg2.connect(db_url)
    cur = conn.cursor()
    return conn, cur


def create_table(cur):
    cur.execute("DROP TABLE IF EXISTS picks;")
    cur.execute(
        """
        CREATE TABLE picks (
            id SERIAL PRIMARY KEY,
            title TEXT,
            description TEXT,
            home_team TEXT,
            away_team TEXT,
            home_bookmaker TEXT,
            away_bookmaker TEXT,
            draw_bookmaker TEXT,
            home_bet DECIMAL,
            away_bet DECIMAL,
            draw_bet DECIMAL,
            home_odds DECIMAL,
            away_odds DECIMAL,
            draw_odds DECIMAL,
            profit DECIMAL
        );
    """
    )


def process_sports_data(sports):
    inserts = []
    for sport in sports:
        title = sport["title"]
        description = sport["description"]
        odds_data = fetch_data(
            f'https://api.the-odds-api.com/v4/sports/{sport["key"]}/odds',
            {
                "api_key": API_KEY,
                "regions": REGIONS,
                "markets": MARKETS,
                "oddsFormat": ODDS_FORMAT,
                "dateFormat": DATE_FORMAT,
            },
        )
        if odds_data is None:
            continue
        for game in odds_data:
            process_game_data(game, title, description, inserts)
    return inserts


def process_game_data(game, title, description, inserts):
    home_team = game["home_team"]
    away_team = game["away_team"]
    odds, bookmakers = get_best_odds(game, home_team, away_team)
    home_odds, away_odds, draw_odds = odds
    home_bookmaker, away_bookmaker, draw_bookmaker = bookmakers

    if home_odds == -1 or away_odds == -1:
        return
    home_implied_prob = 1 / home_odds
    away_implied_prob = 1 / away_odds
    draw_implied_prob = 1 / draw_odds if draw_odds > 0 else 0
    total_percent = home_implied_prob + away_implied_prob + draw_implied_prob

    if total_percent < 1:
        home_bet = home_implied_prob / total_percent
        away_bet = away_implied_prob / total_percent
        draw_bet = draw_implied_prob / total_percent
        profit = 1 / total_percent
        inserts.append(
            (
                title,
                description,
                home_team,
                away_team,
                home_bookmaker,
                away_bookmaker,
                draw_bookmaker,
                home_bet,
                away_bet,
                draw_bet,
                home_odds,
                away_odds,
                draw_odds,
                profit,
            )
        )


def get_best_odds(game, home_team, away_team):
    home_odds = away_odds = draw_odds = -1
    home_bookmaker = away_bookmaker = draw_bookmaker = None
    if home_team == 'Houston Astros':
        pass
    for bookmaker in game["bookmakers"]:
        outcomes = bookmaker["markets"][0]["outcomes"]
        if len(outcomes) > 3:
            print('More than 3 outcomes!')
            continue
        for outcome in outcomes:
            if outcome["name"] == home_team and outcome["price"] > home_odds:
                home_odds = outcome["price"]
                home_bookmaker = bookmaker["key"]
            elif outcome["name"] == away_team and outcome["price"] > away_odds:
                away_odds = outcome["price"]
                away_bookmaker = bookmaker["key"]
            elif outcome["name"] == "Draw" and outcome["price"] > draw_odds:
                draw_odds = outcome["price"]
                draw_bookmaker = bookmaker["key"]
    odds = (home_odds, away_odds, draw_odds)
    bookmakers = (home_bookmaker, away_bookmaker, draw_bookmaker)
    return odds, bookmakers


def main():
    sports = fetch_data("https://api.the-odds-api.com/v4/sports", {"api_key": API_KEY})
    if sports is None:
        return

    conn, cur = init_db_connection(DB_URL)
    create_table(cur)

    inserts = process_sports_data(sports)
    if inserts:
        insert_query = """
            INSERT INTO picks (title, description, home_team, away_team, home_bookmaker, away_bookmaker, draw_bookmaker, home_bet, away_bet, draw_bet, home_odds, away_odds, draw_odds, profit)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
        """
        cur.executemany(insert_query, inserts)
        conn.commit()

    cur.close()
    conn.close()


if __name__ == "__main__":
    main()
