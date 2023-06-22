import React from 'react';
import Header from '../components/Header';

const Home = ({data}) => {
  return (
    <div className="h-screen">
      <Header/>
      {data}
    </div>
  );
};

export default Home;
