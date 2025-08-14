import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import mainLogo from '../../images/main-logo.png'


export default function Header() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg  navbar-light">

        <div className="container-fluid ms-3">
            <Link className="navbar-brand m-0" href="#">
                <img src={mainLogo} alt="Logo" width="200" height="50" className="d-inline-block align-text-top"/>
                {/* <h2>TutionWalla</h2> */}
            </Link>
            <button className="navbar-toggler bg-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse toggler1" id="navbarTogglerDemo02">
            <ul className="navbar-nav center me-5">
                <li className="nav-item">
                    
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                {/* <div className="nav-item dropdown">
                    <Link href="#" className="nav-link  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        SEVICES
                    </Link>
                    <div className="dropdown-menu">
                        <Link className="dropdown-item" href="#">Technologies</Link>
                        <Link className="dropdown-item" href="#">Digital Marketing</Link>
                        <Link className="dropdown-item" href="#">SEO</Link>
                    </div>
                </div> */}
                <li className="nav-item">
                    
                    <Link className="nav-link" to="/services">Services</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav me-4">
            <li className="nav-item">
                    <Link to="/login"><button type="submit" className="btn btn-light fw-semibold px-4">Login</button></Link>
                </li>
                <li className="nav-item px-2">
                    <Link to="/signup"><button type="submit" className="btn btn-info bg-gradiant fw-semibold text-white ml-4 px-4">Signup</button></Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}
