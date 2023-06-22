import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import cheerio from "cheerio";
import SearchInput from "../components/SearchInput";
import Footer from "../components/Footer";
import PlayerCard from "../components/PlayerCard";

const Home = () => {
  //PLAYER INFOS
  const [points, setPoints] = useState("");
  const [name, setName] = useState("");
  const [currentClassement, setCurrentClassement] = useState("");
  const [affilie, setAffilie] = useState("");
  const handleSearch = (value) => {
    // Handle the received value from the SearchInput component
    setAffilie(value);
    // Perform any necessary operations with the value
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
  }, [affilie]);

  return (
    <>
      <Header />
      <div className="h-screen flex flex-col justify-between">
        <SearchInput onSearch={handleSearch} />
        <div className="mx-auto container">
          <PlayerCard name={name}/>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
