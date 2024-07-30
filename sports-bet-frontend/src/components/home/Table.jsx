import React from "react";
import axios from "axios";
import { useTable } from "react-table";
import './Table.css';


function Table(props) {
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
        Header: "Draw ODds",
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
    axios.get("http://localhost:3001/picks").then((res) => {
      setData(res.data);
    });
    console.log("finished updating picks");
  }, []);

  console.log("using table")
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });
  return (
    <div className="Table">
      <div className="container">
        <h1 className='table-title'>
          Live Arbitrage Opportunities
        </h1>
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
