import Header from "./Header";
// import Part from "./Part";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total
                sum={course.parts.reduce((accumulator, currentObject) => {
                    return accumulator + currentObject.exercises;
                }, 0)}
            />
        </>
    );
};

export default Course;
