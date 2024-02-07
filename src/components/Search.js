import React, { useState } from "react";

function Search({ changeFilter }) {

  const [ searchField, setSearchField ] = useState("");

  function onChange(e) {
    setSearchField(e.target.value);
    changeFilter(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchField}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onChange}
      />
    </div>
  );
}

export default Search;
