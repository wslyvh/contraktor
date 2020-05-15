import ALL_PROJECT_DATA from "../data/projects";
import { Project } from "../types";

export async function getProjects(): Promise<Project[]> { 
    return ALL_PROJECT_DATA.map((i: any) => ({
        name: i.name,
        logoPath: i.logoPath,
        contracts: i.contracts
    } as Project));
}

export async function getProject(name: string): Promise<Project | undefined> { 
    const projects = await getProjects();
    const project = projects.find((i: Project) => i.name.toLowerCase() === name.toLowerCase());

    return project;
}