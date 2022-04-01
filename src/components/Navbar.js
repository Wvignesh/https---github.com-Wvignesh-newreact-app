import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
//import Products from './../pages/Products';
//import Signup from './../pages/Signup';
import {FaBars, FaTimes} from 'react-icons/fa'



function Navbar() {
   
    const [icon, setIcon] = useState(false)

  const handleClick = () => {

    setIcon(!icon)
  }

  const closeSideDrawer = ()=> {

    setIcon(false)
  }

  return (
    < >
   <nav className='navbar'>
         <Link to = './logo' className='nav-logo'> LOGO</Link>

   <div className='menu-icon' onClick={closeSideDrawer}> 
   
      {
               icon ? <FaTimes className='fa-times'> </FaTimes > : <FaBars className='fa-bars'> </FaBars>
      }
     
    </div>

   <ul className= { icon ? 'nav-menu active' : 'nav-menu'}>
 
   <li>  <Link to='/Home' className='nav-links' onClick={closeSideDrawer}> Home </Link> </li> 
   <li>   <Link to='/About' className='nav-links' onClick={closeSideDrawer}> About </Link> </li> 
   <li>  <Link to='/Services' className='nav-links' onClick={closeSideDrawer}> Services </Link> </li> 
   <li>  <Link to='/Products' className='nav-links' onClick={closeSideDrawer}> Products </Link> </li> 
   <li>  <Link to='/Contactus' className='nav-links' onClick={closeSideDrawer}> Contact-Us </Link> </li> 
   <li>  <Link to='/Signup' className='nav-links' onClick={closeSideDrawer}> SignUp </Link> </li> 

   </ul>

   </nav>
    </>
  )
}

export default Navbar
