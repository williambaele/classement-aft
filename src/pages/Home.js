import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayerCard from "../components/PlayerCard";
import axios from "axios";
import cheerio from "cheerio";
import MatchHistory from "../components/MatchHistory";
const Home = () => {
  //PLAYER INFOS
  const [points, setPoints] = useState("");
  const [name, setName] = useState("");
  const [currentClassement, setCurrentClassement] = useState("");
  const [numAffilie, setNumAffilie] = useState("1076837");

  // RETRIEVING THE PALYER NUMBER FROM HEADER
  const handleSearch = (value) => {
    setNumAffilie(value);
  };

  //FETCHING PLAYER INFOS
  useEffect(() => {
    const fetchData = async () => {
      try {
        // AVOIDING CORS RESTRCITIONS
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://www.aftnet.be/MyAFT/Players/Detail/${numAffilie}`,
          {
            headers: {
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );
        // GETTING THE RIGHT HTML TAG TO SCRAP
        const $ = cheerio.load(response.data);
        const value = $("a[onclick^=\"$('#pointDetailsModalDialog')\"]").text();
        console.log(value);
        setPoints(value);
        const playerName = $("#player-title").text();
        setName(playerName);
        const scrappedClassement = $("#colInfo").text();
        setCurrentClassement(scrappedClassement);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [numAffilie]);

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="h-screen flex flex-col justify-between">
        <div className="mx-auto container px-4 md:px-0">
          <PlayerCard
            name={name}
            points={points}
            currentClassement={currentClassement}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
