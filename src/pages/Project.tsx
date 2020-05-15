import React from 'react';
import { Header } from '../components';
import { useParams } from 'react-router-dom';

export const ProjectPage = () => {
  const { project } = useParams();
  
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <h2>{project}</h2>
    </div>
    </>
  );
}