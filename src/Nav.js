import React, { useEffect, useState } from 'react';
import  './css/Nav.css'
function Nav(){
    const [show,handleshow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                handleshow(true);
            }else handleshow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }   
    },[]);
    return(
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
                alt="Netflix Logo"
            />
        </div>
    )
}


export default Nav;