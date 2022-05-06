function Button(props) {
    const { value, handleClick } = props;
    return <button onClick={handleClick}>{value}</button>;
}

export default Button;
