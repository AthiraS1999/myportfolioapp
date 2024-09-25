import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <div>
    
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{fontFamily:'cursive',color:'yellow'}}>P O R T F O L I O</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"> <Link class="space"to='/'style={{textDecoration:'none'}}>Home</Link></a>
         
        </li>
        <li class="nav-item">
          <a  class="nav-link" href="#"> <Link class="space" to='/about' style={{textDecoration:'none'}}>AboutMe</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/qualification' style={{textDecoration:'none'}}>Qualification</Link></a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/skill' style={{textDecoration:'none'}}>Skills</Link></a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/services'style={{textDecoration:'none'}}>My Services</Link></a>
          </li>
           <li class="nav-item">
          <a class="nav-link" href="#"> <Link class="space" to='/testmonials'style={{textDecoration:'none'}}>Testmonials</Link></a>
        </li>
       
      </ul>
  
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar