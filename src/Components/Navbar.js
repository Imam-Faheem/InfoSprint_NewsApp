import React, { Component } from 'react'
import './Navbar.css'
import {
  Link
} from "react-router-dom";
import { setupScrollEffect } from './NavbarExternalScript'; 
import logoo from './logoo.png';

export default class Navbar extends Component {
  componentDidMount() {
    setupScrollEffect(); 
  }

  render() {
    return (
      
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark w-100 d-block">
        <div className="container">
        
        <Link className="navbar-brand text-white col-lg-2 col-md-1" to="/"><img id='logoImg' src={logoo} alt="Logo" className="logo-img" /> {/* Display the logo image */}
      </Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-toggler-icon-light"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li id='dash' className="nav-item" style={{width:"1px", height:"30px", backgroundColor:"grey", marginTop:"5px", marginLeft:"20px"}}>
                <span href="/"></span>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
            </ul>
            <form className="d-flex ms-1" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success btn-sm" style={{filter: "brightness(1.1)"}} type="submit">Search</button>
      </form>
           
          </div>
        </div>
      </nav>
    )
  }
}
