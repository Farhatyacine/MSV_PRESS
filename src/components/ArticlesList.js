import React,{Component} from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { connect } from 'react-redux';


class ArticlesList extends Component{

    componentWillMount(){
        if (this.props.loginToken==null){
            this.props.history.push('/login');
        }
    }
    renderArticlesList(){
        return(
            <Query
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
                {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                console.log(data);
                return data.allPressArticles.map(({ id, title , description }) => (
                    <div key={id} className="col-md-6">
                        <a href="blog-single.html" className="blog-entry " >
                        <img src={`${process.env.PUBLIC_URL}/images/img_5.jpg`} alt=""/>
                        <div className="blog-content-body">
                            <div className="post-meta">
                            <span className="category">Food</span>
                            <span className="mr-2">March 15, 2018 </span>  ;
                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                            </div>
                            <h2>{description}</h2>
                        </div>
                        </a>
                    </div>
                ));
                }}
            </Query>
        );
        
    }
    


render(){

    return(
        <div>
            <section className="site-section pt-5">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
    
                        <div className="owl-carousel owl-theme home-slider">
                        <div>
                            <a href="blog-single.html" className="a-block d-flex align-items-center height-lg" style={{backgroundImage: "url('images/img_1.jpg')"}}>
                            <div className="text half-to-full">
                                <div className="post-meta">
                                <span className="category">Lifestyle</span>
                                <span className="mr-2">March 15, 2018 </span>  ;
                                <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                </div>
                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                            </div>
                            </a>
                        </div>
                        <div>
                            <a href="blog-single.html" className="a-block d-flex align-items-center height-lg" style={{backgroundImage: "url('images/img_2.jpg')"}}>
                            <div className="text half-to-full">
                                <div className="post-meta">
                                <span className="category">Lifestyle</span>
                                <span className="mr-2">March 15, 2018 </span>  ;
                                <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                </div>
                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                            </div>
                            </a>
                        </div>
                        <div>
                            <a href="blog-single.html" className="a-block d-flex align-items-center height-lg" style={{backgroundImage: "url('images/img_3.jpg')"}}>
                            <div className="text half-to-full">
                                <div className="post-meta">
                                <span className="category">Lifestyle</span>
                                <span className="mr-2">March 15, 2018 </span>  ;
                                <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                </div>
                                <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                            </div>
                            </a>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={{backgroundImage: "url('images/img_2.jpg')"}}>
                        <div className="text">
                            <div className="post-meta">
                            <span className="category">Lifestyle</span>
                            <span className="mr-2">March 15, 2018 </span>  ;
                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                            </div>
                            <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={{backgroundImage: "url('images/img_3.jpg')"}}>
                        <div className="text">
                            <div className="post-meta">
                            <span className="category">Travel</span>
                            <span className="mr-2">March 15, 2018 </span>  ;
                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                            </div>
                            <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="blog-single.html" className="a-block d-flex align-items-center height-md" style={{backgroundImage: "url('images/img_4.jpg')"}}>
                        <div className="text">
                            <div className="post-meta">
                            <span className="category">Food</span>
                            <span className="mr-2">March 15, 2018 </span>  ;
                            <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                            </div>
                            <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                        </div>
                        </a>
                    </div>
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
                                <li className="page-item  active"><a className="page-link" href="">Prev</a></li>
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

function mapStateToProps({loginToken}){
    return {loginToken};
}


export default connect(mapStateToProps)(ArticlesList);