'use client'
import styles from "./form.module.css"
import { useProjectContext } from '../context/ProjectContext.jsx';

// components/ProjectForm.js

import { useState ,useContext,createContext} from 'react';

export default function ProjectForm() {
   const ProjectContext= createContext()
  

    //Put object created from from into value field
    

    const [projectData, setProjectData] = useState({
        projectName: '',
        description: '',
        goal: '',
        category: '',
        projectImage: ''
    });

   
    //
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProjectData({ ...projectData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
              
        sessionStorage.setItem('projectStore',JSON.stringify(projectData));
       

        // Here you can perform validation before creating the proj   // Reset form after submission
      
    };

    return (
        <div className={styles.card}>
            <h1>Create New Project</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="projectName">Project Name:</label>
                <input
                    type="text"
                    id="projectName"
                    name="projectName"
                    value={projectData.projectName}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={projectData.description}
                    onChange={handleChange}
                    required
                ></textarea><br /><br />

                <label htmlFor="goal">Goal:</label>
                <input
                    type="number"
                    id="goal"
                    name="goal"
                    value={projectData.goal}
                    onChange={handleChange}
                    required
                /><br /><br />

                <label htmlFor="typeOfProduct">Product category:</label>
                <select
                    id="category"
                    name="category"
                    value={projectData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select category</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Art">Art</option>
                    
                </select><br /><br />
              
                <br /><br />

                <label htmlFor="projectImage">Project Image:</label>
                <input
                    type="file"
                    id="projectImage"
                    name="projectImage"
                    value={projectData.projectImage}
                    onChange={handleChange}
                    required
                /><br /><br />

                <button type="submit">Create Project</button>
            </form>
        </div>
    );
}



