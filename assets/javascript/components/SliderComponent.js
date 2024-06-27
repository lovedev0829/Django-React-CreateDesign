// src/SliderComponent.js
//import React, { useState } from 'react';
//import { createRoot } from 'react-dom/client';

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

import MixDesignTable from './MixDesignTable';

import '../../styles/SliderComponent.css';

const SliderComponent = () => {
  const [value, setValue] = useState(50);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/design/update_data/', { range: value });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
        <div className="slider-container">
          <input
              type="range"
              min="0"
              max="100"
              value={value}
              className="slider"
              onChange={handleChange}
          />
          <p>Value: <span>{value}</span></p>
          </div>
        <MixDesignTable data={data} />
    </>
  );
};

createRoot(document.getElementById('slider-root')).render(<SliderComponent />);


