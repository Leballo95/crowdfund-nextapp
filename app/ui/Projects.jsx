'use client'
// pages/index.js



export default function Projects() {
    const projects=[]
    projects.push(sessionStorage.getItem(JSON.parse('projectStore')));
    


    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        {/* Render project details here */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
