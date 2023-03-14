import React, { useEffect, useState } from 'react'
import './style.css';

function Navbar() {
    const [show, handleShow] = useState(false)
    
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll", []);
        };
    }, []);

    


  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img className='nav-logo'
        src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"
        alt='Netflix-logo' />

        <img className='nav-avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="" />
    </div>
  )
}

export default Navbar