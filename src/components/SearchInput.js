import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [numAffilie, setNumAffilie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(numAffilie);
  };

  return (
    <div className="bg-red-300 p-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-green-200"
          value={numAffilie}
          onChange={(e) => setNumAffilie(e.target.value)}
        />
        <button type="submit" className="bg-purple-200">
          submit
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
