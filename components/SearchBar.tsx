"use client";
import { useState } from "react";

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const handleSubmit = () => {};
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter product link" className="searchbar-input"/>
      <button className="searchbar-btn" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
