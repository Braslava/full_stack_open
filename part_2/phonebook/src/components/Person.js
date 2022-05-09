const Person = ({ person, handleDeletePerson }) => {
    return (
        <div className="person-container">
            <p>
                {person.name} <span>{person.phone}</span>
                <button className="delete-btn" onClick={handleDeletePerson} id={person.id}>
                Delete
            </button>
            </p>
        </div>
    );
};

export default Person;
