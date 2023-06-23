import React, { useEffect, useState } from 'react'
import "./Nav.css"
function Nav() {
    const [show,handleshow]=useState(false);
    const trainsitionNavBar=()=>{
        if(window.scrollY>100){
            handleshow(true);
        }
        else
        handleshow(false);
    }

    useEffect(()=>{
    window.addEventListener("scroll",trainsitionNavBar);
    // Clean up function
    return ()=>window.removeEventListener("scroll",trainsitionNavBar);
    },[])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_contents">
      <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
      <img className="nav_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbFFYPMNcfVoE0goo2lflz2BOVj-45xP62oYckDwqmw&usqp=CAU&ec=48665701" alt="" />
    </div>
    </div>
  )
}

export default Nav
