import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Query } from "react-apollo";
import gql from "graphql-tag";
class Header extends Component{


    applyMiddleware(){
    
        console.log(this.props.loginToken);
        console.log('heeeesdjgyckdsgcksdlk');
        

    }

    render(){
        {this.applyMiddleware()}
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
                            <Link to={"/home"} className="nav-link active" >Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link" >New Article</Link>
                        </li>
                        
                        </ul>
                        
                    </div>
                    </div>
                </nav>
            </header>
    
    
    
        );


    }


    
}
function mapStateToprops({loginToken}){
    return {loginToken}
}

export default connect(mapStateToprops)(Header) ;