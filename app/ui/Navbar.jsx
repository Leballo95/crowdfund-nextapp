import Link from "next/link"
import styles from "./navbar.module.css";

export default function Navbar(){
   

    return(
        <div className={styles.nav}>
            <h1 className={styles.title}>LERUO</h1>
            <div className={styles.navSearch}>
            <input  type="search" name="" id="nav-search" placeholder="Search for projects" />
            <button type="submit"><svg fill="white" className={styles.butn} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></button>
            </div>
            
            <ul className={styles.options}>
               <li><Link href="/connect" >Create a project</Link></li>
               <li><Link href="/">Connect wallet</Link></li>
               
            </ul>
        </div>
    )
}