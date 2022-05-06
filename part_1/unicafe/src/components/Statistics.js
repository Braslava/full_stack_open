import StatisticsLine from "./StatisticsLine";

function Statistics(props) {
    const { good, neutral, bad, reviewCount, average, positiveProportion } =
        props;
    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <table className="table">
                <tbody>
                    <StatisticsLine text="good" value={good} />
                    <StatisticsLine text="neutral" value={neutral} />
                    <StatisticsLine text="bad" value={bad} />
                    <StatisticsLine text="all" value={reviewCount} />
                    <StatisticsLine text="average" value={average} />
                    <StatisticsLine
                        text="positive"
                        value={`${positiveProportion}%`}
                    />
                </tbody>
            </table>
        </div>
    );
}

export default Statistics;
