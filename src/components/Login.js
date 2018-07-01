import React, {Component} from "react";
import {graphql, Query} from "react-apollo";
import gql from "graphql-tag";

class Login extends Component {

    login = async () => {
        console.log(this.state);
        return (<Query
                query={gql`
            {
                allPressArticles {
                id
                title
                description
                }
            }
            `}
            >
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;
                    console.log(data);
                    return data.allPressArticles.map(({id, title, description}) => (
                        <div key={id} className="col-md-6">
                            <a href="blog-single.html" className="blog-entry ">
                                <img src={`${process.env.PUBLIC_URL}/images/img_5.jpg`} alt=""/>
                                <div className="blog-content-body">
                                    <div className="post-meta">
                                        <span className="category">Food</span>
                                        <span className="mr-2">March 15, 2018 </span> ;
                                        <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                    </div>
                                    <h2>{description}</h2>
                                </div>
                            </a>
                        </div>
                    ));
                }}
            </Query>
        )


    };

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
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
                                className="rounded mx-auto d-block col-sm-3" alt="logo"
                            />
                            <br/>

                            <div className="row justify-content-center">
                                <div className="form-group col-sm-8">
                                    <input
                                        value={this.state.name}
                                        onChange={e => this.setState({email: e.target.value})}
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
                                        onChange={e => this.setState({password: e.target.value})}
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

                                        onClick={() => this.login()}
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
{
    allPressArticles {
    id
    title
    description
    }
}
`;

export default (graphql(FETCH_ARTICLES, {name: 'fetchArticles'}))(Login);
