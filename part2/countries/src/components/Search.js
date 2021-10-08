import React from "react";

const Search = ({ value, setValue }) => {
  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div>
      find countries
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Search;
