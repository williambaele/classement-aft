import React, { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  const [data, setData] = useState("");

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

        setData(value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
