//import react
import React from "react";

//import link
import { Link } from '@inertiajs/inertia-react';

function Layout({ children }) {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        {/* <Link className="navbar-brand" href="/">LARAVEL + INERTIA JS</Link> */}
                        <img src="https://i.ibb.co/g7cxzKd/go-skate.png" alt="description of myimage" width={150}></img>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggle-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item ms-2">
                                    <Link className="nav-link" href="/skateboards" target="_blank">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/skateboards/produk">PRODUCTS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/skateboards/about" target="_blank">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/skateboards/contact" target="_blank">CONTACT US</Link>
                                </li>
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container mt-5">
                { children }
            </main>
        </>
    )
}

export default Layout

