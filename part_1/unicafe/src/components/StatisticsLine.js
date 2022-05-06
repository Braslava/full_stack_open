function StatisticsLine(props) {
    const { text, value } = props;
    return (
        <tr>
            <th>{text} </th>
            <td>{value}</td>
        </tr>
    );
}

export default StatisticsLine;
