import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import cheerio from "cheerio";
import SearchInput from "../components/SearchInput";
import Footer from "../components/Footer";

const Home = () => {
  const [classement, setClassement] = useState("");
  const [name, setName] = useState("");
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
        setClassement(value);
        const valueFromSpan = $("#player-title").text();
        setName(valueFromSpan);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [affilie]);

  return (
    <div className="h-screen">
      <Header />
      <SearchInput onSearch={handleSearch} />
      <p>
        {classement} - {name}
      </p>
      <Footer/>
    </div>
  );
};

export default Home;
