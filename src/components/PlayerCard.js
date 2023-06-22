import React from "react";

const PlayerCard = ({ name, numAffilie }) => {
  return (
    <div class="min-h-full">
      <main class="py-10">
        <div class="flex justify-between items-center mx-auto container">
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
              <h1 class="text-3xl font-bold text-gray-900">{name ? name : "BAELE William"}</h1>
            </div>
          </div>

          <a href={`https://www.aftnet.be/MyAFT/Players/Detail/${numAffilie}`}>
            <div className="bg-orange-600 flex gap-3 p-2 px-3 rounded-md items-center">
              <p className="text-white font-large">Fiche complète</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FFFFFF"
                class="bi bi-box-arrow-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                />
              </svg>
            </div>
          </a>
        </div>
        <div class="mt-8 mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div class="lg:col-start-1 lg:col-span-2">
            <section>
              <div class="bg-gray-100 shadow sm:rounded-lg ">
                <div class="px-4 py-5 sm:px-6">
                  <h2 class="text-2xl leading-6 font-medium text-gray-900">
                    Informations du joueur
                  </h2>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-9 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Club</dt>
                      <dd class="mt-1 text-sm text-gray-900">Davis</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Actif depuis
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">12 mars 2019</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Sexe </dt>
                      <dd class="mt-1 text-sm text-gray-900">Homme</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Age</dt>
                      <dd class="mt-1 text-sm text-gray-900">23 ans</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Classement simple
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">C30.5</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Classement simple interclubs
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">C30.4</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Total des matchs joués cette année
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">10</dd>
                    </div>
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        Total des victoires de cette année
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">9</dd>
                    </div>

                    <div class="sm:col-span-2">
                      <dt class="text-sm font-medium text-gray-500">
                        Prédiction de classement
                      </dt>
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
          <section class="lg:col-start-3 lg:col-span-1">
            <div class="bg-gray-100  shadow sm:rounded-lg ">
              <div class="px-4 py-5 sm:px-6 flex justify-between">
                <h2 class="text-2xl leading-6 font-medium text-gray-900">
                  Résultats récents
                </h2>
                <div className="w-28 rounded-xl flex max-h-8">
                  <div
                    className="h-full rounded-l-xl bg-orange-600"
                    style={{ width: "66.66%" }}
                  ></div>
                  <div
                    className="h-full rounded-r-xl bg-gray-600"
                    style={{ width: "33.33%" }}
                  ></div>
                </div>
              </div>
              <div class="border-t border-gray-200 ">
                <ul class="p-6">
                  <li>
                    <div class="relative pb-8">
                      <span
                        class="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#FFFFFF"
                              class="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm font-medium text-gray-900">
                              6/2 1/6 6/0
                              <p class=" text-gray-500">VS Antoine Dejonghe</p>
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
                        class="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#FFFFFF"
                              class="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm font-medium text-gray-900">
                              6/2 1/6 6/0
                              <p class=" text-gray-500">VS Antoine Dejonghe</p>
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
                        class="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#FFFFFF"
                              class="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm font-medium text-gray-900">
                              6/2 1/6 6/0
                              <p class=" text-gray-500">VS Antoine Dejonghe</p>
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
                        class="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-6 w-6 rounded-full bg-gray-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#FFFFFF"
                              class="bi bi-x-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm font-medium text-gray-900">
                              6/2 1/6 6/0
                              <p class=" text-gray-500">VS Antoine Dejonghe</p>
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
                        class="absolute top-4 left-3 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#FFFFFF"
                              class="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm font-medium text-gray-900">
                              6/2 1/6 6/0
                              <p class=" text-gray-500">VS Antoine Dejonghe</p>
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
                    <div class="relative">
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-6 w-6 rounded-full bg-orange-600 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="#FFFFFF"
                              class="bi bi-check-lg"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm font-medium text-gray-900">
                              6/2 1/6 6/0
                              <p class=" text-gray-500">VS Antoine Dejonghe</p>
                            </p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time datetime="2020-09-20">Sep 20</time>
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
