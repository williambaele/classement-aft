import React from "react";

const SearchInput = () => {
  return (
    <div className="bg-red-300 p-8">
      <form>
        <input type="text" className="bg-green-200" />
        <button type="submit" className="bg-purple-200">submit</button>
      </form>
    </div>
  );
};

export default SearchInput;
