import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [numAffilie, setNumAffilie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(numAffilie);
  };
  return (
    <header class="bg-gray-50">
      <div class="mx-auto max-w-screen-xl px-4 md:px-0">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <p className="text-3xl">🎾</p>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <div class="sm:flex sm:gap-4">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-4 gap-2"
                >
                  <input
                    type="text"
                    className="bg-gray-200 rounded-md p-1 col-span-3 outline-none pl-2"
                    placeholder="Numéro d'affilié"
                    value={numAffilie}
                    onChange={(e) => setNumAffilie(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-orange-600 rounded-md text-white text-md font-large p-1 hover:bg-[#D0570C]/80 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
