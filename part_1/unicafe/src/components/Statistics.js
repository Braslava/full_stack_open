import StatisticsLine from "./StatisticsLine";

function Statistics(props) {
    const { good, neutral, bad, reviewCount, average, positiveProportion } =
        props;
    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={reviewCount} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={`${positiveProportion}%`} />
        </div>
    );
}

export default Statistics;
