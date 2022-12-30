import React, { useState, useEffect } from 'react';
import './Banner.css'
import axios from "./axios"
import requests from './Requests';


function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals); //only we request one time
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)  //Math.floor will give us random number (ex. 20*random number)
        ]
      );
      return request;
      }
      fetchData(); //we calling the function. it works only when it calls. 
      
    }, []); //no dependance. It's only render when it's start
    // console.log(movie);

    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <header
      className='banner'  //css in inside the jsx
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
      >
        <div className='banner_contents'>
          <h1 className='banner_title'>
            {movie?.title || movie?.name || movie.original_name }
          </h1>
          <div className='banner_buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
          </div>
          <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
        </div>
        <div className='banner_fadeBottom' />    
    </header>
 
  );
}

export default Banner;

//(?.) is called opitional channing - when used with function calls, it returns undefined if the given function doesn't exist. 