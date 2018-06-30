import React, {Component} from 'react';
import Footer from './Footer';
import Header from './Header';
import {BrowserRouter, Route} from "react-router-dom";
import ArticleList from './ArticlesList';
import Login from './Login';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/home" component={ArticleList}/>
                    <Route exact path="/login" component={Login}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
