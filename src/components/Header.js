import React from 'react';

const Header = () =>{
    return (

        <header role="banner">
            <div className="top-bar">
                <div className="container">
                <div className="row">
                    <div className="col-9 social">
                    <a href=""><span className="fa fa-twitter"></span></a>
                    <a href=""><span className="fa fa-facebook"></span></a>
                    <a href=""><span className="fa fa-instagram"></span></a>
                    <a href=""><span className="fa fa-youtube-play"></span></a>
                    <a href=""><span className="fa fa-vimeo"></span></a>
                    <a href=""><span className="fa fa-snapchat"></span></a>
                    </div>
                    <div className="col-3 search-top">
                    
                    <form action="#" className="search-top-form">
                        <span className="icon fa fa-search"></span>
                        <input type="text" id="s" placeholder="Type keyword to search..."/>>
                    </form>
                    </div>
                </div>
                </div>
            </div>

            <div className="container logo-wrap">
                <div className="row pt-5">
                <div className="col-12 text-center">
                    <a className="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></a>
                    <h1 className="site-logo"><a href="index-2.html">Balita</a></h1>
                </div>
                </div>
            </div>
            
            <nav className="navbar navbar-expand-md  navbar-light bg-light">
                <div className="container">
                
                
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="index-2.html">Home</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="category.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Travel</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                        <a className="dropdown-item" href="category.html">Asia</a>
                        <a className="dropdown-item" href="category.html">Europe</a>
                        <a className="dropdown-item" href="category.html">Dubai</a>
                        <a className="dropdown-item" href="category.html">Africa</a>
                        <a className="dropdown-item" href="category.html">South America</a>
                        </div>

                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="category.html" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown05">
                        <a className="dropdown-item" href="category.html">Lifestyle</a>
                        <a className="dropdown-item" href="category.html">Food</a>
                        <a className="dropdown-item" href="category.html">Adventure</a>
                        <a className="dropdown-item" href="category.html">Travel</a>
                        <a className="dropdown-item" href="category.html">Business</a>
                        </div>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    </ul>
                    
                </div>
                </div>
            </nav>
        </header>



    );
}

export default Header ;