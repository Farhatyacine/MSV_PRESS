import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {AUTH_TOKEN} from "../actions/types";
import {setUserlogin} from "../actions";

class Header extends Component {
    _signOut = () => {
        localStorage.setItem(AUTH_TOKEN, null);
        this.props.setUserlogin(null);
        this.props.history.push('/login');
    };

    renderTopBar() {
        if (this.props.loginToken != null) {
            return (<div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-4 social">
                            <a href="https://twitter.com/MonSuperVoisin" target={'_blank'}><span className="fa fa-twitter"></span></a>
                            <a href="https://www.facebook.com/monsupervoisin/" target={'_blank'}><span className="fa fa-facebook"></span></a>
                            <a href="https://www.monsupervoisin.fr/" target={'_blank'}><span className="fa fa-safari" target={'_blank'}></span></a>
                        </div>
                        <div className="col-5"></div>
                        <div className="col-3 social">
                            <button className="btn btn-outline-light" onClick={() => this._signOut()}>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>);
        }
    }

    renderNavBar() {
        if (this.props.loginToken != null) {
            return (<nav className="navbar navbar-expand-md  navbar-light bg-light">
                <div className="container">


                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link active">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">New Article</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>);
        }
    }

    render() {
        return (
            <header role="banner">
                {this.renderTopBar()}
                <div className="container logo-wrap">
                    <div className="row pt-5">
                        <div className="col-12 text-center">
                            <a className="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu"
                               role="button" aria-expanded="false" aria-controls="navbarMenu"><span
                                className="burger-lines"></span></a>
                            <h1 className="site-logo"><a href="index-2.html">Balita</a></h1>
                        </div>
                    </div>
                </div>
                {this.renderNavBar()}
            </header>


        );
    }


}

function mapStateToprops({loginToken}) {
    return {loginToken}
}

export default connect(mapStateToprops, {setUserlogin})(withRouter(Header));