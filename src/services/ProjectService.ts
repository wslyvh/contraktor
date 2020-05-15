import ALL_PROJECT_DATA from "../data/projects";
import { Project } from "../types";

export async function getProjects(): Promise<Project[]> { 
    return ALL_PROJECT_DATA.map((i: any) => ({
        name: i.name,
        logoPath: i.logoPath,
        contracts: i.contracts
    } as Project));
}
