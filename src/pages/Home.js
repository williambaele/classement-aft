import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import cheerio from "cheerio";
import SearchInput from '../components/SearchInput';

const Home = () => {

  const [classement, setClassement] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // AVOIDING CORS RESTRCITIONS
        const response = await axios.get(
          "https://cors-anywhere.herokuapp.com/https://www.aftnet.be/MyAFT/Players/Detail/1082852",
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
  }, []);

  return (
    <div className="h-screen">
      <Header/>
      <SearchInput/>
      <p>
        {classement} - {name}
        </p>
    </div>
  );
};

export default Home;
