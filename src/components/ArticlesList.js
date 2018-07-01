import React, {Component} from 'react';
import {graphql} from "react-apollo";
import gql from "graphql-tag";
import _ from "lodash";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ArticlesList extends Component {
    _fetch = async () => {
        const result = await this.props.getAllAtricle;
        const {allPressArticles} = result;
        allPressArticles !== undefined ? localStorage.setItem("allPressArticles", JSON.stringify(allPressArticles)) : '';
    };

    constructor() {
        super();
        this.state = {
            allPressArticles: []
        };
    }

    componentWillMount() {
        this._fetch();
        this.setState({allPressArticles: JSON.parse(localStorage.getItem("allPressArticles"))});
    }

    renderArticlesList() {
        if (this.props.loginToken == null) {
            this.props.history.push('/login');
        } else {
            return this.state.allPressArticles.map(({id, title, description, createdAt}) => (
                <div key={id} className="col-md-6">
                    <Link to={{
                        pathname: '/singleArticle',
                        state: {
                            article: {
                                id: id,
                                title: title,
                                description: description
                            }
                        }
                    }} className="blog-entry ">
                        <img src={`${process.env.PUBLIC_URL}/images/img_5.jpg`} alt="aa"/>
                        <div className="blog-content-body">
                            <div className="post-meta">
                                <h4>{title}</h4>
                                <span className="mr-2">{new Date(createdAt).toDateString()}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            ));
        }
    }

    renderRecentArticles() {
        if (this.props.loginToken == null) {
            this.props.history.push('/login');
        } else {
            const sorted = _.sortBy(this.state.allPressArticles, this.state.allPressArticles.createdAt);
            const recentArticles = [sorted[0], sorted[1], sorted[2]];
            return recentArticles.map(({id, title, createdAt}) => (
                <div key={id} className="col-md-6 col-lg-4">
                    <a href="blog-single.html" className="a-block d-flex align-items-center height-md"
                       style={{backgroundImage: "url('images/img_4.jpg')"}}>
                        <div className="text">
                            <div className="post-meta">
                                <span className="mr-2">{new Date(createdAt).toDateString()}</span>
                            </div>
                            <h3>{title}</h3>
                        </div>
                    </a>
                </div>));
        }
    }


    render() {
        return (
            <div>
                <section className="site-section pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="owl-carousel owl-theme home-slider">
                                    <div>
                                        <a href="blog-single.html"
                                           className="a-block d-flex align-items-center height-lg"
                                           style={{backgroundImage: "url('images/img_1.jpg')"}}>
                                            <div className="text half-to-full">
                                                <div className="post-meta">
                                                    <span className="category">Lifestyle</span>
                                                    <span className="mr-2">March 15, 2018 </span> ;
                                                    <span className="ml-2"><span
                                                        className="fa fa-comments"></span> 3</span>
                                                </div>
                                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                                                    nobis, ut dicta eaque ipsa laudantium!</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="blog-single.html"
                                           className="a-block d-flex align-items-center height-lg"
                                           style={{backgroundImage: "url('images/img_2.jpg')"}}>
                                            <div className="text half-to-full">
                                                <div className="post-meta">
                                                    <span className="category">Lifestyle</span>
                                                    <span className="mr-2">March 15, 2018 </span> ;
                                                    <span className="ml-2"><span
                                                        className="fa fa-comments"></span> 3</span>
                                                </div>
                                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                                                    nobis, ut dicta eaque ipsa laudantium!</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="blog-single.html"
                                           className="a-block d-flex align-items-center height-lg"
                                           style={{backgroundImage: "url('images/img_3.jpg')"}}>
                                            <div className="text half-to-full">
                                                <div className="post-meta">
                                                    <span className="category">Lifestyle</span>
                                                    <span className="mr-2">March 15, 2018 </span> ;
                                                    <span className="ml-2"><span
                                                        className="fa fa-comments"></span> 3</span>
                                                </div>
                                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                                                    nobis, ut dicta eaque ipsa laudantium!</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            {this.renderRecentArticles()}
                        </div>
                    </div>
                </section>
                <section className="site-section py-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="mb-4">Lifestyle Category</h2>
                            </div>
                        </div>
                        <div className="row blog-entries">
                            <div className="col-md-12  main-content">
                                <div className="row">
                                    {this.renderArticlesList()}
                                </div>

                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <nav aria-label="Page navigation" className="text-center">
                                            <ul className="pagination">
                                                <li className="page-item  active"><a className="page-link"
                                                                                     href="">Prev</a></li>
                                                <li className="page-item"><a className="page-link" href="">1</a></li>
                                                <li className="page-item"><a className="page-link" href="">2</a></li>
                                                <li className="page-item"><a className="page-link" href="">3</a></li>
                                                <li className="page-item"><a className="page-link" href="">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

function mapStateToProps({loginToken}) {
    return {loginToken};
}

const GET_ALL_ARTICLE = gql`
{
	allPressArticles{
    id
    title
    description
    createdAt
  }
  
}`;

export default connect(mapStateToProps, null)(
    graphql(GET_ALL_ARTICLE, {name: 'getAllAtricle'})(ArticlesList));