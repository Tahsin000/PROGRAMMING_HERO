import React from 'react';
import './Nav.css'


const Nav = () => {
    return (
        <div className='d-flex justify-content-center'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Mealmaster</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Menu</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Nav;