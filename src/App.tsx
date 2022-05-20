import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import requests from './requests';
import Row from './Components/Row';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.findNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.findTrending} isLargeRow ={false}/>
      <Row title='Top Rated' fetchUrl={requests.findTopRated} isLargeRow ={false}/>
      <Row title='Action Movies' fetchUrl={requests.findAction} isLargeRow ={false}/>
      <Row title='Comedy Movies' fetchUrl={requests.findComedy} isLargeRow ={false}/>
      <Row title='Horror Movies' fetchUrl={requests.findHorror} isLargeRow ={false}/>
      <Row title='Romance Movies' fetchUrl={requests.findRomance} isLargeRow ={false}/>
      <Row title='Documentaries' fetchUrl={requests.findDocumentaries} isLargeRow ={false} />
    </div>
  );
}

export default App;
