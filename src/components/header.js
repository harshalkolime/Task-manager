import React from 'react'
import Logo from '../assets/logo.svg'

export const Header = () => {





  return (


   
<header className="header">

     <div className='container'>
        <img src={Logo} alt="" />
        <span>TasK Pro</span>
     </div>

     <div>
        <span className="circle activatetheme"></span>
        <span className='circle '></span>
        <span className='circle'></span>
        <span className='circle'></span>
     </div>
    


</header>
  )
}
