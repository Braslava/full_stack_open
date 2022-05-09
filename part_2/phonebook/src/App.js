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
    const [notification, setNotification] = useState();

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

    const createNotification = (type, text) => {
        setNotification({ type, text });
        setTimeout(() => {
            setNotification(null);
        }, 5000);
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
                personService
                    .updatePerson(changedEntry.id, changedEntry)
                    .then((returnedPerson) => {
                        setPersons(
                            persons.map((person) =>
                                person.id === returnedPerson.id
                                    ? returnedPerson
                                    : person
                            )
                        );
                        clearFrom();
                        createNotification(
                            "success",
                            `Phone of ${returnedPerson.name} successfully changed!`
                        );
                    })
                    .catch((error) => {
                        createNotification("error", error.message);
                        console.log(error);
                    });
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
                setPersons(persons.concat(serverResponse));
                clearFrom();
                createNotification(
                    "success",
                    `${serverResponse.name} successfully added!`
                );
            })
            .catch((error) => {
                createNotification("error", error.message);
                console.log(error);
            });
    };

    const handleSearchInput = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const handleDeletePerson = (e) => {
        if (window.confirm("Are your sure you want to delete this contact?")) {
            const id = e.target.id;
            personService
                .removePerson(id)
                .then(() => {
                    setPersons(
                        persons.filter((person) => person.id.toString() !== id)
                    );
                })
                .catch((error) => {
                    createNotification("error", error.message);
                    console.log(error);
                });
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
            {notification && (
                <p className={`notification--${notification.type}`}>
                    {notification.text}
                </p>
            )}

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
