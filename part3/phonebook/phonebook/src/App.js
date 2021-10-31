import React, { useEffect, useState } from "react";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";
import personService from "./services/persons";
import Notification from "./component/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setStringFilter] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const notifyWith = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const existing = persons.find((p) => p.name === newName);
    if (existing) {
      const ok = window.confirm(
        `${existing.name} already in phonebook, replace the old number with new one?`
      );
      if (ok) {
        personService
          .update(existing.id, {
            name: existing.name,
            number: newNumber,
          })
          .then((retunedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existing.id ? person : retunedPerson
              )
            );
            notifyWith(`Changed number of  ${existing.name}`);
            setNewName("");
            setNewNumber("");
          });
      }
    } else {
      personService
        .create({
          name: newName,
          number: newNumber,
        })
        .then((addedPerson) => {
          setPersons(persons.concat(addedPerson));
          notifyWith(`Added ${newName}`);
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          console.log(error.response.data.error);
          notifyWith(`${error.response.data.error} `, "error");
        });
    }
  };

  const deletePerson = (id) => {
    const toDelete = persons.find((p) => p.id === id);
    const ok = window.confirm(`Delete ${toDelete.name}`);
    if (ok) {
      personService
        .remove(id)
        .then((response) => {
          setPersons(persons.filter((p) => p.id !== id));
          notifyWith(`Deleted ${toDelete.name}`);
        })
        .catch(() => {
          setPersons(persons.filter((p) => p.id !== id));
          notifyWith(`${toDelete.name} had already been removed`, "error");
        });
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterStringChange = (event) => {
    console.log(event.target.value);
    setStringFilter(event.target.value);
  };

  const personsToShow =
    filterString.length === 0
      ? persons
      : persons.filter(
          (p) => p.name.toLowerCase().indexOf(filterString.toLowerCase()) > 0
        );

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

      <div>
        filter shown with:{" "}
        <Filter value={filterString} onChange={handleFilterStringChange} />
      </div>

      <h2>add a new</h2>

      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>

      <Persons persons={personsToShow} deletePerson={deletePerson} />

      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
