import "./Converter.css";
import React from "react";

function Converter() {
  const [oddDecimal, setOddDecimal] = React.useState(2);
  const [oddAmerican, setOddAmerican] = React.useState(100);

  function handleSubmitAmerican() {
    setOddDecimal(
      oddAmerican > 0 ? oddAmerican / 100 + 1 : Math.abs(100 / oddAmerican) + 1
    );
  }

  function handleSubmitDecimal() {
    setOddAmerican(
      parseInt(
        oddDecimal >= 2 ? 100 * (oddDecimal - 1) : -100 / (oddDecimal - 1)
      )
    );
  }

  return (
    <div>
      <div className="odds-flexbox">
        <form onSubmit={handleSubmitAmerican} className="submit-form">
          <label className="label">
            American
            <input
              className="input-box"
              type="int"
              value={oddAmerican}
              placeholder={oddAmerican}
              onChange={(e) => setOddAmerican(e.target.value)}
            />
          </label>
        </form>
        <form onSubmit={handleSubmitDecimal} className="submit-form">
          <label className="label">
            Decimal
            <input
              className="input-box"
              type="int"
              value={oddDecimal}
              placeholder={oddDecimal}
              onChange={(e) => setOddDecimal(e.target.value)}
            />
          </label>
        </form>
      </div>
      <div className="explanation">
        <h1 className="exp-head-1">Understanding betting odds</h1>
        <p className="desc">
          The way sports betting odds are presented can differ between American
          and Decimal. While they all mean the same thing, understanding how
          they work with your wager can be tricky. Use the betting odds and
          moneyline calculator tool above to convert these odds and learn more
          about them below.
        </p>
        <h1 className="exp-head">American odds explained</h1>
        <p className="desc">
          American odds are presented in hundreds and thousands and are defined
          by the positive (+) or negative (-) value assigned. An easy way to
          think about American odds calculation is to think of them as currency
          exchanges in $100 increments. Negative odds indicate how much you have
          to wager to profit $100. For example, a bet placed at -400 odds would
          require you to wager $400 to profit $100. Positive odds indicate how
          much you would profit on a $100 bet. For example, a bet placed at +400
          odds would profit $400 on a $100 wager. The positive value indicates
          that the odds are “plus money” and return more profit than the amount
          risked on the bet.
        </p>
        <h1 className="exp-head">Decimal odds explained</h1>
        <p className="desc">
          Decimal odds are the preferred variation for most countries outside of
          the U.S., including Europe, which is why they are often referred to as
          “European odds”. Instead of using positive and negative values or
          fractional equations, decimal odds display a simple value that you
          multiply your bet amount by to calculate your profit (money won) and
          overall return (profit and original risk amount). For example, a $100
          bet made at decimal odds of 3.00 would return $300 ($100 x 3.00): $200
          in profit and the original $100 amount risked. A $100 bet made at
          decimal odds of 1.50 would return $150: $50 in profit and the original
          $100 amount risked.
        </p>
      </div>
    </div>
  );
}

export default Converter;
