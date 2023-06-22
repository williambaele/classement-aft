import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://cors-anywhere.herokuapp.com/https://www.aftnet.be/MyAFT/Players/Detail/1082852',
          {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            },
          }
        );

        // Use cheerio to parse the HTML response
        const $ = cheerio.load(response.data);

        // Find the desired HTML tag and extract the text value
        const value = $('a[onclick^="$(\'#pointDetailsModalDialog\')"]').text();

        setData(value);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <h1>Extracted Value:</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;
