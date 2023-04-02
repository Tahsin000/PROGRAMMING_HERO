import React from 'react';
// import '../../css/bootstrap.min.css'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className="navbar bg-light">
            <div className="container-fluid">
                <a href='https://github.com/TEAM-OF-HHJN' className="navbar-brand fw-bold text-secondary">HHJN</a>
                <form className="d-flex" role="search">
                    <img className='ProfileImg' src="../../../public/assets/img/profile.png" alt="" />
                </form>
            </div>
            </nav>
            <hr />
        </div>
    );
};

export default Nav;