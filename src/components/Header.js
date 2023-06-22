import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [numAffilie, setNumAffilie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(numAffilie);
  };
  return (
    <header class="bg-gray-50">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
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
                    className="bg-gray-200 rounded-md p-1 col-span-3 outline-none ml-5"
                    placeholder="Numéro d'affilié"
                    value={numAffilie}
                    onChange={(e) => setNumAffilie(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-[#D0570C] rounded-md text-white text-md font-large p-1 hover:bg-[#D0570C]/80"
                  >
                    Chercher
                  </button>
                </form>
              </div>{" "}
            </div>

            <div class="block md:hidden">
              <button class="rounded bg-[#D0570C] p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
