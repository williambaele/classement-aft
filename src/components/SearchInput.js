import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [numAffilie, setNumAffilie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(numAffilie);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-2">
        <input
          type="text"
          className="bg-gray-100 rounded-md p-1 col-span-3 outline-none ml-2"
          placeholder="Numéro d'affilié"
          value={numAffilie}
          onChange={(e) => setNumAffilie(e.target.value)}
        />
        <button type="submit" className="bg-[#D0570C] rounded-md text-white text-md font-large p-1 hover:bg-[#D0570C]/80">
          Chercher
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
