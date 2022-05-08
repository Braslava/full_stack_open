import axios from "axios";
import { useState, useEffect } from "react";
import Person from "./components/Person";
import Search from "./components/Search";
import AddEntryForm from "./components/AddEntryFrom";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const getPersonsData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/db");
            setPersons(response.data.persons);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {getPersonsData()}, []);

    const handleNameChange = (e) => setNewName(e.target.value);

    const handlePhoneChange = (e) => setNewPhone(e.target.value);

    const handleAddEntry = (e) => {
        e.preventDefault();
        if (
            persons.filter(
                (person) => person.name.toLowerCase() === newName.toLowerCase()
            ).length > 0
        ) {
            alert(`${newName} is already in the phonebook!`);
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
