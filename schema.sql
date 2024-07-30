DROP TABLE IF EXISTS picks;
CREATE TABLE picks (
    id SERIAL,
    title TEXT,
    "description" TEXT,
    home_team TEXT,
    away_team TEXT,
    home_bookmaker TEXT,
    away_bookmaker TEXT,
    home_bet DECIMAL,
    away_bet DECIMAL,
    home_odds DECIMAL,
    away_odds DECIMAL,
    profit DECIMAL
);