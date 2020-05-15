import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { getProjects } from '../services/ProjectService';
import { Project } from '../types';

export const Explore = () => {
  const [projects, setProjects] = useState(new Array<Project>());

  const fetchProjects = async () => { 
    const projects = await getProjects();
    setProjects(projects);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectListItems = projects.map((project: any) =>
    <li key={project.name}>
      {project.name} ({project.contracts.length})
    </li>
  );

  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <h2>Explore</h2>
      <ul>
        {projectListItems}
      </ul>
    </div>
    </>
  );
}