const Person = ({ person }) => {
    return (
        <p>
            {person.name} <span>{person.phone}</span>
        </p>
    );
};

export default Person;
