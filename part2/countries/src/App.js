import axios from "axios";
import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Search from "./components/Search";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v2/all").then((results) => {
      console.log("promise fulfilled");
      console.log(results.data);
      setCountries(results.data);
    });
  }, []);
  console.log("render", countries.length, "countries");

  const filteredCountries =
    filter.length === 1
      ? countries
      : countries.filter(
          (c) => c.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
        );

  return (
    <div>
      <Search value={filter} setValue={setFilter} />

      <Countries countries={filteredCountries} setValue={setFilter} />
    </div>
  );
};

export default App;
