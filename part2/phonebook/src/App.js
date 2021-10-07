import React, { useState } from "react";
import Filter from "./component/Filter";

import PersonForm from "./component/PersonForm";
import Persons from "./component/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterString, setStringFilter] = useState("");

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

  const addPerson = (event) => {
    event.preventDefault();

    const existing = persons.find((p) => p.name === newName);

    if (existing) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(newObject));
    }

    setNewName(" ");
    setNewNumber("");
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

      <Persons persons={personsToShow} />

      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
