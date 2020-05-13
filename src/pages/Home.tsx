import React from 'react';
import { Header, SearchBar } from '../components';

export const Home = () => {
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