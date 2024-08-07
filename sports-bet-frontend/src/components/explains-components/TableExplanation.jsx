import "./TableExplanation.css";
import example from "./table_example.png";

function TableExplanation() {
  return (
    <div className="desc-block">
      <h1 className="table-desc-header">How do I Use the Table?</h1>
      <p className="example-text1">
        The table on the picks page displays all the live arbitrage
        opportunities. To use the table, first pick a row you want. Take the
        below image for example.
      </p>
      <img src={example} className="example-table-image"></img>
      <p className="example-text2">
        Let's say we want to bet $100. The table tells us to place 71% of our
        bet on the home team on the home bookmaker, so we place a $71 on the
        Arizone State Sun Devils to win on DraftKings. We then place a $29 wager
        on the Wyoming Cowboys to win on Bovada. In this scenario, no matter
        which team wins, we are guaranteed a .51% (51 cent) profit.
      </p>
      <br />
      <p className="example-text3">In the case that there is a draw bookmaker and draw bet, we would do the same thing again on an additional bookmaker. Since draws are hard to price accurately, the profit margins tend to be much higher than without them.</p>
    </div>
  );
}

export default TableExplanation;
