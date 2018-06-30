import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter, Route } from "react-router-dom";
import ArticleList from './ArticlesList';


class App extends Component {
  render() {
    return (

      <div>
        
        <Header/>
        <ArticleList/>
        <Footer/>
      </div>
      

    );
  }
}

export default App;
