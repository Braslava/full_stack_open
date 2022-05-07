import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            {props.parts.map((part) => {
                return (
                    <Part
                        part={part.name}
                        key={part.id}
                        exercises={part.exercises}
                    />
                );
            })}
        </div>
    );
};

export default Content;
