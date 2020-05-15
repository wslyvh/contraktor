import React from 'react';
import { Header, SearchBar } from '../components';

export const HomePage = () => {
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