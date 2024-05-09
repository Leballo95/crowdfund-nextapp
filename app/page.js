
import styles from "./page.module.css";
import Navbar from "./ui/Navbar";
import Projects from "./ui/Projects";
import ProjectContext from "./context/ProjectContext.jsx";
//import context and wrap projects component


export default function Home() {
   

  return (
    <div>
      <Navbar/>
      <Projects/>
    </div>
    
  );
}
