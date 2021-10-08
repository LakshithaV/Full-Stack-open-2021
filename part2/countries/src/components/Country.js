import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>

      <h3>Spoken languages</h3>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.iso639_2}>{lang.name}</li>
        ))}
      </ul>

      <div>
        <img src={country.flag} height="80px" alt="flag" />
      </div>
    </div>
  );
};

export default Country;
