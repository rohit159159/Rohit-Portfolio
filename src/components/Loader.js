import React from 'react';
import './Loader.css';
import rocket from '../assets/img/banner2_header.png';


const Loader = () => (
  <div className="loader-wrapper">
    <div className="rocket-loader">
      <svg className="svg-loader" viewBox="0 0 100 100">
        <circle className="loader-bg" cx="50" cy="50" r="45" />
        <circle className="loader-ring" cx="50" cy="50" r="45" />
      </svg>
      <img src={rocket} alt="Rocket" className="rocket-img" />
    </div>
    <p className="loader-text">Launching...</p>
  </div>
);

export default Loader;