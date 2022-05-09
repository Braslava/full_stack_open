import { useState, useEffect } from "react";
import Person from "./components/Person";
import Search from "./components/Search";
import AddEntryForm from "./components/AddEntryFrom";
import personService from "./services/persons";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        personService.getAllPersons().then((response) => {
            setPersons(response.data);
            console.log(response.data);
        });
    }, []);

    const clearFrom = () => {
        setNewName("");
        setNewPhone("");
    };

    const handleNameChange = (e) => setNewName(e.target.value);

    const handlePhoneChange = (e) => setNewPhone(e.target.value);

    const handleAddEntry = (e) => {
        e.preventDefault();
        const oldPerson = persons.find(
            (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        console.log(oldPerson);
        if (oldPerson) {
            if (
                window.confirm(
                    `Do you want to update the phone number of ${oldPerson.name}?`
                )
            ) {
                const changedEntry = { ...oldPerson, phone: newPhone };
                console.log(changedEntry);
                personService.updatePerson(changedEntry.id, changedEntry);
                setPersons(
                    persons.map((person) =>
                        person.id === changedEntry.id ? changedEntry : person
                    )
                );
                clearFrom();
                return;
            }
        }

        const personObject = {
            name: newName,
            phone: newPhone,
            id: Date.now(),
        };

        personService
            .createPerson(personObject)
            .then((serverResponse) => {
                console.log(serverResponse);
                setPersons(persons.concat(serverResponse));
                clearFrom();
            })
            .catch((err) => console.log(err));
    };

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleDeletePerson = (e) => {
        if (window.confirm("Are your sure you want to delete this contact?")) {
            console.log("delete", e.target.id);
            const id = e.target.id;
            personService
                .removePerson(id)
                .then(() => {
                    setPersons(
                        persons.filter((person) => person.id.toString() !== id)
                    );
                })
                .catch((error) => console.log(error));
        }
    };

    const personsToShow = searchTerm
        ? persons.filter((person) =>
              person.name.toLowerCase().includes(searchTerm)
          )
        : persons;

    return (
        <div>
            <h1>Phonebook</h1>
            <div>debug: {searchTerm}</div>
            <Search handleSearchInput={handleSearchInput} />
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
                <Person
                    person={person}
                    key={person.id}
                    handleDeletePerson={handleDeletePerson}
                />
            ))}
        </div>
    );
};

export default App;
