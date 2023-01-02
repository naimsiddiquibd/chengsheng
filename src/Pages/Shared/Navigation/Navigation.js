import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logout } = useAuth();

    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt=""/></a>
                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="https://products.agriequipment.cn/">
            
                                Products
                       
                        </a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <li><a href="https://learn.codeinflect.com/">Learn</a></li>
                    
                    {
                        user?.email ?
                            <li class="drop-down"><a href="">{user.displayName}</a>
                                <ul>
                                <li><a onClick={logout} href="#">Logout</a></li>
                                </ul>
                            </li>
                            :
                            <li>
                            <Link to="/login">
                                Login
                            </Link>
                            </li>
                    } */}
                    </ul>
                </nav>
                </div>
            </header>
        </div>
    );
};

export default Navigation;