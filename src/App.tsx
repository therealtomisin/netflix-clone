import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import requests from './requests';
import Row from './Components/Row';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.findNetflixOriginals}/>
      <Row title='Trending Now' fetchUrl={requests.findTrending}/>
      <Row title='Top Rated' fetchUrl={requests.findTopRated}/>
      <Row title='Action Movies' fetchUrl={requests.findAction}/>
      <Row title='Comedy Movies' fetchUrl={requests.findComedy}/>
      <Row title='Horror Movies' fetchUrl={requests.findHorror}/>
      <Row title='Romance Movies' fetchUrl={requests.findRomance}/>
      <Row title='Documentaries' fetchUrl={requests.findDocumentaries}/>
    </div>
  );
}

export default App;
