import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PlayerCard from "../components/PlayerCard";

const Home = () => {

  return (
    <>
      <Header />
      <div className="h-screen flex flex-col justify-between">
        <div className="mx-auto container">
          <PlayerCard/>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
