import './Description.css';
import example from './example.png';

function Description() {
    return (
        <div className='desc-block'>
            <h1 className='arb-bet-desc'>
                What is Arbitrage Betting?
            </h1>
            <p className='example-text'>
                Arbitrage betting is when a bettor makes multiple bets on multiple sides of the same event to guarantee a profit no matter the result.
                This is usually done through exploiting differing odds offered by different sportsbooks.
                <br />
                If two different sportsbooks are offering different prices or lines on a bet at the same time, so you bet both sides to guarantee a profit.

            </p>
            <img src={example} className='example-image'></img>
            <p className='example-text'>
                In the above example, the play is on the total over/under 33.5 on the Bills and Jets game.
                If you bet $100 on the over 33.5 points on BetMGM at -250 odds you will get a payout of $140.
                <br />
                <br />
                On the other side, if you bet $36.84 on DraftKings at +280 on the under 33.5 points you would also get a payout of $140.

                So, using this example, you would risk $136.84 between both bets, and you would have a guaranteed payout of $140, with a profit of 2.26%, or $3.16. Obviously, the more you risk the more profit you will make.
            </p>
        </div>

    )
}

export default Description;