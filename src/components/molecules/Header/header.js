import { useState } from 'react';
import styles from './header.module.css';
import { ImMenu } from "react-icons/im"
import { useNavigate } from 'react-router-dom';
import Button from './btn'

export default function Header(){
    const navigate = useNavigate()

    const [icon,seticon]=useState(false)

    function handleChange(){
        seticon(icon==true?false:true)
    }

    const navBar = [
        
        'Home',
        'About',
        'Projects',
        'Videos',
        'Contact',

    ]

    const pathKey = {
        'Home': '/home',
        'About': '/about',
        'Projects': '/projects',
        'Videos': '/videos',
        'Contact': '/contact',
        'login': '/login'
    }

    const handleNavigation = (key) => {
        const redirect = pathKey[key]
        navigate(redirect);
    }

    return(
        <div className={styles.header}>
            <div className={styles.navbar}>
                <img className={styles.logo} src="https://www.freeiconspng.com/thumbs/logo-design/blank-logo-design-for-brand-13.png" />
                <div className={styles.leftside}>
                
                <button className={styles.nvbtn} text="Home" onClick={()=>handleNavigation('Home')} >Home</button>
                <button className={styles.nvbtn} text="About" onClick={()=>handleNavigation('About')} >About</button>
                <button className={styles.nvbtn} text="Projects" onClick={()=>handleNavigation('Projects')} >Projects</button>
                <button className={styles.nvbtn} text="Videos" onClick={()=>handleNavigation('Videos')} >Videos</button>
                <button className={styles.nvbtn} text="Contact" onClick={()=>handleNavigation('Contact')} >Contact</button>

                <button className={styles.btn} onClick={()=>handleNavigation('Login')}>Login</button>
                </div>
              
                <div className={styles.colside}>
                    <ImMenu onClick={handleChange} style={{fontSize:"30px",color:"whitesmoke",marginTop:"7px"}}/>
                {
                  icon==true?  navBar.map(page =>(
                        <li className={styles.colpara}>{page}</li>
                    )):null
                   
                }
                {
                    icon==true? <button className={styles.btn1}>Login</button>:null
                }
                </div>
            </div>
        </div>
    )

}