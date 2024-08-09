import React from "react";
import axios from "axios";
import { useTable } from "react-table";
import "./Table.css";

function Table() {
  const [data, setData] = React.useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Sport",
        accessor: "description",
      },
      {
        Header: "Home Team",
        accessor: "home_team",
      },
      {
        Header: "Away Team",
        accessor: "away_team",
      },
      {
        Header: "Home Bookmaker",
        accessor: "home_bookmaker",
      },
      {
        Header: "Away Bookmaker",
        accessor: "away_bookmaker",
      },
      {
        Header: "Draw Bookmaker",
        accessor: "draw_bookmaker",
      },
      {
        Header: "Home Bet",
        accessor: "home_bet",
      },
      {
        Header: "Away Bet",
        accessor: "away_bet",
      },
      {
        Header: "Draw Bet",
        accessor: "draw_bet",
      },
      {
        Header: "Home Odds",
        accessor: "home_odds",
      },
      {
        Header: "Away Odds",
        accessor: "away_odds",
      },
      {
        Header: "Draw Odds",
        accessor: "draw_odds",
      },
      {
        Header: "Profit",
        accessor: "profit",
      },
    ],
    []
  );

  React.useEffect(() => {
    axios.get("https://sportsarbitrage.onrender.com/picks").then((res) => {
      for (var element of res.data) {
        element["home_bet"] =
          String(Math.round(element["home_bet"] * 100)) + "%";
        element["away_bet"] =
          String(Math.round(element["away_bet"] * 100)) + "%";
        element["draw_bet"] =
          String(Math.round(element["draw_bet"] * 100)) + "%";
        element["profit"] =
          String(Math.round((element["profit"] - 1) * 10000) / 100) + "%";
        if (element["draw_odds"] == -1) {
          element["draw_odds"] = "";
          element["draw_bet"] = "";
        }
        switch (element["home_bookmaker"]) {
          case "betonlineag":
            element["home_bookmaker"] = "BetOnline";
            break;
          case "betmgm":
            element["home_bookmaker"] = "BetMGM";
            break;
          case "betrivers":
            element["home_bookmaker"] = "BetRivers";
            break;
          case "betus":
            element["home_bookmaker"] = "BetUS";
            break;
          case "bovada":
            element["home_bookmaker"] = "Bovada";
            break;
          case "williamhill_us":
            element["home_bookmaker"] = "Caesars";
            break;
          case "draftkings":
            element["home_bookmaker"] = "DraftKings";
            break;
          case "fanduel":
            element["home_bookmaker"] = "FanDuel";
            break;
          case "lowvig":
            element["home_bookmaker"] = "LowVig.ag";
            break;
          case "mybookieag":
            element["home_bookmaker"] = "MyBookie.ag";
            break;
          case "superbook":
            element["home_bookmaker"] = "SuperBook";
            break;
          case "unibet_us":
            element["home_bookmaker"] = "Unibet";
            break;
          case "wynnbet":
            element["home_bookmaker"] = "WynnBET";
            break;
          case "ballybet":
            element["home_bookmaker"] = "Bally Bet";
            break;
          case "betanysports":
            element["home_bookmaker"] = "betPARX";
            break;
          case "espnbet":
            element["home_bookmaker"] = "ESPN BET";
            break;
          case "fliff":
            element["home_bookmaker"] = "Fliff";
            break;
          case "hardrockbet":
            element["home_bookmaker"] = "Hard Rock Bet";
            break;
          case "sisportsbook":
            element["home_bookmaker"] = "SI Sportsbook";
            break;
          case "windcreek":
            element["home_bookmaker"] = "Wind Creek";
            break;
        }

        switch (element["away_bookmaker"]) {
          case "betonlineag":
            element["away_bookmaker"] = "BetOnline";
            break;
          case "betmgm":
            element["away_bookmaker"] = "BetMGM";
            break;
          case "betrivers":
            element["away_bookmaker"] = "BetRivers";
            break;
          case "betus":
            element["away_bookmaker"] = "BetUS";
            break;
          case "bovada":
            element["away_bookmaker"] = "Bovada";
            break;
          case "williamhill_us":
            element["away_bookmaker"] = "Caesars";
            break;
          case "draftkings":
            element["away_bookmaker"] = "DraftKings";
            break;
          case "fanduel":
            element["away_bookmaker"] = "FanDuel";
            break;
          case "lowvig":
            element["away_bookmaker"] = "LowVig.ag";
            break;
          case "mybookieag":
            element["away_bookmaker"] = "MyBookie.ag";
            break;
          case "superbook":
            element["away_bookmaker"] = "SuperBook";
            break;
          case "unibet_us":
            element["away_bookmaker"] = "Unibet";
            break;
          case "wynnbet":
            element["away_bookmaker"] = "WynnBET";
            break;
          case "ballybet":
            element["away_bookmaker"] = "Bally Bet";
            break;
          case "betanysports":
            element["away_bookmaker"] = "betPARX";
            break;
          case "espnbet":
            element["away_bookmaker"] = "ESPN BET";
            break;
          case "fliff":
            element["away_bookmaker"] = "Fliff";
            break;
          case "hardrockbet":
            element["away_bookmaker"] = "Hard Rock Bet";
            break;
          case "sisportsbook":
            element["away_bookmaker"] = "SI Sportsbook";
            break;
          case "windcreek":
            element["away_bookmaker"] = "Wind Creek";
            break;
        }

        switch (element["draw_bookmaker"]) {
          case "betonlineag":
            element["draw_bookmaker"] = "BetOnline";
            break;
          case "betmgm":
            element["draw_bookmaker"] = "BetMGM";
            break;
          case "betrivers":
            element["draw_bookmaker"] = "BetRivers";
            break;
          case "betus":
            element["draw_bookmaker"] = "BetUS";
            break;
          case "bovada":
            element["draw_bookmaker"] = "Bovada";
            break;
          case "williamhill_us":
            element["draw_bookmaker"] = "Caesars";
            break;
          case "draftkings":
            element["draw_bookmaker"] = "DraftKings";
            break;
          case "fanduel":
            element["draw_bookmaker"] = "FanDuel";
            break;
          case "lowvig":
            element["draw_bookmaker"] = "LowVig.ag";
            break;
          case "mybookieag":
            element["draw_bookmaker"] = "MyBookie.ag";
            break;
          case "superbook":
            element["draw_bookmaker"] = "SuperBook";
            break;
          case "unibet_us":
            element["draw_bookmaker"] = "Unibet";
            break;
          case "wynnbet":
            element["draw_bookmaker"] = "WynnBET";
            break;
          case "ballybet":
            element["draw_bookmaker"] = "Bally Bet";
            break;
          case "betanysports":
            element["draw_bookmaker"] = "betPARX";
            break;
          case "espnbet":
            element["draw_bookmaker"] = "ESPN BET";
            break;
          case "fliff":
            element["draw_bookmaker"] = "Fliff";
            break;
          case "hardrockbet":
            element["draw_bookmaker"] = "Hard Rock Bet";
            break;
          case "sisportsbook":
            element["draw_bookmaker"] = "SI Sportsbook";
            break;
          case "windcreek":
            element["draw_bookmaker"] = "Wind Creek";
            break;
        }
      }
      setData(res.data);
    });
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="Table">
      <h1 className="table-title">Live Arbitrage Opportunities</h1>
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;
