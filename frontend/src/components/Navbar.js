import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ btnShow }) => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light ">
                {/* Container wrapper */}
                <div className="container">
                    {/* Navbar brand */}
                    <a className="navbar-brand me-2" href="https://mdbgo.com/">
                        <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height={16} alt="MDB Logo" loading="lazy" style={{ marginTop: '-1px' }} />
                    </a>
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/" >Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" >About</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link" to="/contact" >Contact</NavLink>
                            </li>
                        </ul>
                        {/* Left links */}
                        <div className="d-flex align-items-center">
                            {btnShow ?
                                <>
                                    <button type="button" className="btn btn-link px-3 me-2">
                                        <NavLink className="nav-link" to='/login' >Login</NavLink>
                                    </button>
                                    <button type="button" className="btn btn-primary me-3">
                                        <NavLink className="nav-link" to='/signup' >Signup</NavLink>
                                    </button>
                                </>
                                :
                                <button type="button" className="btn btn-link px-3 me-2">
                                    <NavLink className="nav-link" to='/logout' >Logout</NavLink>
                                </button>
                            }

                        </div>
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}

        </>
    )
}

export default Navbar
