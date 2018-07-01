import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Login extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''    
        }
    }
    _confirm = async () => {
        const {  email, password } = this.state
          

          const result = await this.props.loginmutation({
            variables: {
                email, password
            },
          })
          const { authToken } = result.data.createUserToken
          console.log(authToken);
          //this._saveUserData(token)
    }

  render() {
    return (
      
      <div className="container align-self-center">
        <div className="shadow-lg p-5 mb-5 bg-white rounded">
          <div className="row justify-content-center">
            <div className="jumbotron bg-light col-md-6">
              <h3 className="text-center">Welcome</h3>
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                className="rounded mx-auto d-block col-sm-3"
                alt=""
              />
              <br />
              
                <div className="row justify-content-center">
                  <div className="form-group col-sm-8">
                    <input
                        value={this.state.name}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email"
                        />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group col-sm-8">
                    
                    <input
                        value={this.state.password}
                        onChange={e => this.setState({ password: e.target.value })}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Your Password"
                    />
                    
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="form-group col-sm-3">
                    <button
                      
                      className="btn btn-outline-primary"
                      
                      onClick={()=>this._confirm()}
                    >
                      Login
                    </button>
                  </div>
                </div>
                {/* {this.login()} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}




  const FETCH_ARTICLES = gql`
  mutation {
    createUserToken(email: "haithem+test@monsupervoisin.fr", password: "password") {
      user {
        Address {
          id
        }
        lastName
        firstName
      }
      authToken
      error {
        code
        message
      }
    }
  } 
`


export default (
  graphql(FETCH_ARTICLES, { name: 'loginmutation' }))(Login)