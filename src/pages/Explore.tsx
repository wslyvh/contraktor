import React, { useState, useEffect } from 'react';
import { Notification, Loading } from '../components';
import { getProjects } from '../services/ProjectService';
import { Project } from '../types';
import { Link } from 'react-router-dom';

export const ExplorePage = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(new Array<Project>());

  const fetchProjects = async () => { 
    const projects = await getProjects();
    setProjects(projects);
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectListItems = projects.map((project: any) =>
    <div className="card shadow-sm bg-white rounded" key={project.name}>
      <Link to={`/explore/${project.name}`} className="text-center stretched-link" >
        <img className="card-img" src={project.logoPath} alt={project.name} />
      </Link>
    </div>
  );

  if (loading) { 
    return <Loading />
  } 
  
  if (!projects?.length) { 
    return <Notification type="info" message={"No projects found"} />
  } 

  return (
    <>
      <h2>DeFi</h2>
      
      <div className="card-columns">
        {projectListItems}
      </div>
    </>
  );
}