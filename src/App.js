import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
     {/* <h1>This Netflix Made by Shivam Anand</h1> */}
     <Nav/>
     <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
     <Row title="Trending  Movies" fetchUrl={request.fetchTrendng}/>
     <Row title="Top Rated Movies" fetchUrl={request.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={request.fecthComedyMoviews}/>
     <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={request.fechRomanceMovies}/>
     <Row title="Documentaries Movies" fetchUrl={request.fetchDocumentaries}/>
     <Row title="Science Fiction Movies" fetchUrl={request.fetchScienceFiction}/>
    </div>
  );
}

export default App;
