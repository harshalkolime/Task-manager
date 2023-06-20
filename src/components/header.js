import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'

export const Header = () => {

  const [theme, setTheme]= useState(JSON.parse(localStorage.getItem("theme") )|| "lightmode");

  useEffect(()=>{
localStorage.setItem("theme", JSON.stringify(theme))  
let bodi= document.querySelector("body")
bodi.removeAttribute("class")
 bodi.classList.add(theme)

},[theme])



  return (


   
<header className="header">

     <div className='container'>
        <img src={Logo} alt="" />
        <span>TasK Pro</span>
     </div>
     <div>
        <span onClick={()=>setTheme("darkmode")}  className={theme === "darkmode" ? "dark activated" : "dark"}></span>
      
        <span onClick={()=>setTheme("lightmode")}  className={theme === "lightmode" ? "light activated" : "light"}></span>

        <span onClick={()=>setTheme("bluemode")}  className={theme === "bluemode" ? "blue activated" : "blue"}></span>


 
     </div>
    


</header>
  )
}
