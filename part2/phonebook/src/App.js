import React, { useEffect, useState } from "react";
import Filter from "./component/Filter";
import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setStringFilter] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const existing = persons.find((p) => p.name === newName);

    if (existing) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newObject = {
        name: newName,
        number: newNumber,
      };
      personService.create(newObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
    }

    setNewName(" ");
    setNewNumber("");
  };

  const deletePerson = (id) => {
    const toDelete = persons.find((p) => p.id === id);
    const ok = window.confirm(`Delete ${toDelete.name}`);
    if (ok) {
      personService
        .remove(id)
        .then((response) => {
          setPersons(persons.filter((p) => p.id !== id));
          alert(`Deleted ${toDelete.name}`);
        })
        .catch(() => {
          setPersons(persons.filter((p) => p.id !== id));
          alert(`${toDelete.name} had already been removed`, "error");
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
