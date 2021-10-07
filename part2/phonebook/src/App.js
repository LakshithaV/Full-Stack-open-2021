import React, { useState } from "react";
import Person from "./component/Person";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();

    const existing = persons.find((p) => p.name === newName);

    if (existing) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newObject = {
        name: newName,
      };
      setPersons(persons.concat(newObject));
    }

    setNewName(" ");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </ul>
      </div>
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
