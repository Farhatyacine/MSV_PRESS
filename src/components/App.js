import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter, Route } from "react-router-dom";
import ArticleList from './ArticlesList';
import Login from './Login';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://dev.api.monsupervoisin.fr/graphql"
});

class App extends Component {
  render() {
    return (

      <ApolloProvider client={client}>
          <BrowserRouter >
          <div>
            <Header/>
            <Route exact path="/" component={ArticleList} />
            <Route exact path="/home" component={ArticleList} />
            <Route exact path="/login" component={Login} />
            <Footer/>
          </div>        
          </BrowserRouter>
      </ApolloProvider>
      
      

    );
  }
}

export default App;
