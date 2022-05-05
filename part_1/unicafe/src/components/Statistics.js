function Statistics(props) {
    // save clicks of each button to its own state
    const { good, neutral, bad, reviewCount, average, positiveProportion } =
        props;
    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>All {reviewCount}</p>
            <p>Average {average}</p>
            <p>Positive {positiveProportion}%</p>
        </div>
    );
}

export default Statistics;
