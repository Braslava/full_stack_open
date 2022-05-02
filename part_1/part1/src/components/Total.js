const Total = (props) => {
    return (
        <div>
            <p>
                Number of exercises{" "}
                {props.parts.reduce((accumulator, currentObject) => {
                    return accumulator + currentObject.exercises;
                }, 0)}
            </p>
        </div>
    );
};

export default Total;
