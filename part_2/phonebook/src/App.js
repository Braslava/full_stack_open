import { useState } from "react";
import Person from "./components/Person";
import Search from "./components/Search";
import AddEntryForm from "./components/AddEntryFrom";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleNameChange = (e) => setNewName(e.target.value);

    const handlePhoneChange = (e) => setNewPhone(e.target.value);

    const handleAddEntry = (e) => {
        e.preventDefault();
        if (
            persons.filter(
                (person) => person.name.toLowerCase() === newName.toLowerCase()
            ).length > 0
        ) {
            alert(`${newName} is laready in the phonebook!`);
            return;
        }
        const personObject = {
            name: newName,
            phone: newPhone,
            id: persons.length + 1,
        };

        setPersons(persons.concat(personObject));
        setNewName("");
    };

    const filterPersons = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const personsToShow = searchTerm
        ? persons.filter((person) =>
              person.name.toLocaleLowerCase().includes(searchTerm)
          )
        : persons;

    return (
        <div>
            <h1>Phonebook</h1>
            <div>debug: {searchTerm}</div>
            <Search filterPersons={filterPersons} />
            <h2>Add a new entry</h2>
            <AddEntryForm
                newName={newName}
                handleNameChange={handleNameChange}
                newPhone={newPhone}
                handlePhoneChange={handlePhoneChange}
                handleAddEntry={handleAddEntry}
            />
            <h2>Numbers</h2>
            {personsToShow.map((person) => (
                <Person person={person} key={person.id} />
            ))}
        </div>
    );
};

export default App;
