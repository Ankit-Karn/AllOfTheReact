import { useState } from 'react';
import styles from './header.module.css';
import { ImMenu } from "react-icons/im"

export default function Header(){
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

    return(
        <div className={styles.header}>
            <div className={styles.navbar}>
                <img className={styles.logo} src="https://www.freeiconspng.com/thumbs/logo-design/blank-logo-design-for-brand-13.png" />
                <div className={styles.leftside}>
                {
                    navBar.map(page =>(
                        <p className={styles.headpara}>{page}</p>
                    ))
                }
                <button className={styles.btn}>Login</button>
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