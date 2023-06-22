import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import cheerio from "cheerio";

const PlayerCard = () => {
   //PLAYER INFOS
   const [points, setPoints] = useState("");
   const [name, setName] = useState("");
   const [currentClassement, setCurrentClassement] = useState("");
   const [affilie, setAffilie] = useState("");
   const handleSearch = (value) => {
     setAffilie(value);
   };

   useEffect(() => {
     const fetchData = async () => {
       try {
         // AVOIDING CORS RESTRCITIONS
         const response = await axios.get(
           `https://cors-anywhere.herokuapp.com/https://www.aftnet.be/MyAFT/Players/Detail/${affilie}`,
           {
             headers: {
               "X-Requested-With": "XMLHttpRequest",
             },
           }
         );
         // GETTING THE RIGHT HTML TAG TO SCRAP
         const $ = cheerio.load(response.data);
         const value = $("a[onclick^=\"$('#pointDetailsModalDialog')\"]").text();
         console.log(value)
         setPoints(value);
         const playerName = $("#player-title").text();
         setName(playerName);
         const scrappedClassement = $("#colInfo").text();
         setCurrentClassement(scrappedClassement);
       } catch (error) {
         console.error(error);
       }
     };
     console.log("searched" + affilie)

     fetchData();
   }, []);

  return (
    <div class="min-h-full">
      <main class="py-10">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <div class="flex items-center space-x-5">
            <div class="flex-shrink-0">
              <div class="relative">
                <img
                  class="h-16 w-16 rounded-full"
                  src="https://www.aftnet.be/MyAFT/Content/Images/profile-male.png"
                  alt=""
                />
                <span
                  class="absolute inset-0 shadow-inner rounded-full"
                  aria-hidden="true"
                ></span>
              </div>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">{name}{points}</h1>
              <p class="text-sm font-medium text-gray-500">
               Joueur au club:
              </p>
            </div>
          </div>
          <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <SearchInput onSearch={handleSearch} />
          </div>
        </div>

        <div class="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div class="space-y-6 lg:col-start-1 lg:col-span-2">
            <section aria-labelledby="applicant-information-title">
              <div class="bg-white shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                  <h2
                    id="applicant-information-title"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Applicant Information
                  </h2>
                  <p class="mt-1 max-w-2xl text-sm text-gray-500">
                    Personal details and application.
                  </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Application for
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        Backend Developer
                      </dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        ricardocooper@example.com
                      </dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Salary expectation
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">$120,000</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Phone</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        +1 555-555-5555
                      </dd>
                    </div>
                    <div class="sm:col-span-2">
                      <dt class="text-sm font-medium text-gray-500">About</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                    <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">Prédiction de classement</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
                        anim incididunt cillum culpa consequat. Excepteur qui
                        ipsum aliquip consequat sint. Sit id mollit nulla mollit
                        nostrud in ea officia proident. Irure nostrud pariatur
                        mollit ad adipisicing reprehenderit deserunt qui eu.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>

          <section
            aria-labelledby="timeline-title"
            class="lg:col-start-3 lg:col-span-1"
          >
            <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              <h2 id="timeline-title" class="text-lg font-medium text-gray-900">
                Timeline
              </h2>

              <div class="mt-6 flow-root">
                <ul role="list" class="-mb-8">
                  <li>
                    <div class="relative pb-8">
                      <span
                        class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                            <svg
                              class="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-500">
                              Applied to{" "}
                              <a href="#" class="font-medium text-gray-900">
                                Front End Developer
                              </a>
                            </p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time datetime="2020-09-20">Sep 20</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="relative pb-8">
                      <span
                        class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              class="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-500">
                              Advanced to phone screening by{" "}
                              <a href="#" class="font-medium text-gray-900">
                                Bethany Blake
                              </a>
                            </p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time datetime="2020-09-22">Sep 22</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="relative pb-8">
                      <span
                        class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              class="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-500">
                              Completed phone screening with{" "}
                              <a href="#" class="font-medium text-gray-900">
                                Martha Gardner
                              </a>
                            </p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time datetime="2020-09-28">Sep 28</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="relative pb-8">
                      <span
                        class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              class="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-500">
                              Advanced to interview by{" "}
                              <a href="#" class="font-medium text-gray-900">
                                Bethany Blake
                              </a>
                            </p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time datetime="2020-09-30">Sep 30</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="relative pb-8">
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                            <svg
                              class="w-5 h-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-500">
                              Completed interview with{" "}
                              <a href="#" class="font-medium text-gray-900">
                                Katherine Snyder
                              </a>
                            </p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time datetime="2020-10-04">Oct 4</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PlayerCard;