import React from "react";
import './Netflix.css';

import Row from "../../components/Row/Row";
import requests from "../../Requests";

import Banner from "../../Banner";
// import Nav from "../../Nav";
import NavBar from "../Nav/NavBar";

function Netflix () {
  return (

      <div className="App"> 
      {/* <Nav /> */}
      <NavBar />
      <Banner />
      <Row title='NETFLIX ORIGINALS'
      fetchUrl={requests.fetchNetflixOriginals} isLargeRow />  
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRatedMovies} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries Movies' fetchUrl={requests.fetchDocumentaries} />
    </div>
    
  );
}

export default Netflix;
