import React, { useState } from "react";
import "./searchInput.css";

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  return (
    <div className="search-input-container flex">
      <input
        type="text"
        value={inputValue}
        placeholder="Search here"
        onChange={handleChange}
      />
      <img
        className="w-7 p-0 object-contain"
        src="searchbar-images/search-glass.png"
        alt="close"
      />
      {inputValue && (
        <button onClick={clearSearch}>
          <img src="searchbar-images/close.png" alt="close" />
        </button>
      )}
    </div>
  );
};
