import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { getProjects } from '../services/ProjectService';
import { Project } from '../types';
import { Link } from 'react-router-dom';

export const ExplorePage = () => {
  const [projects, setProjects] = useState(new Array<Project>());

  const fetchProjects = async () => { 
    const projects = await getProjects();
    setProjects(projects);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectListItems = projects.map((project: any) =>
    <div className="card mb-3" key={project.name}>
      <Link to={`/explore/${project.name}`} className="text-center stretched-link" >
        <img className="card-img" src={project.logoPath} alt={project.name} />
      </Link>
    </div>
  );

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <h2>Explore</h2>
      
      <div className="card-columns">
        {projectListItems}
      </div>
    </div>
    </>
  );
}