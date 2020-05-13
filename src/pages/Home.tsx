import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <br/><br/>
        <SearchBar />
      </div>
    </>
  );
}

export default Home;
