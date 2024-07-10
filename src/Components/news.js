import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 4,
        category: 'general',
      }
      static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
      }
    
    constructor(props){
        super(props);
        this.state = {
            articles:[],
            loading: false,
            page:1
        }
    }

   async componentDidMount(){
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbe28ec650c9408c9897ce633cdef542&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata);
        this.setState({articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false})
    }

    handlePreClick = async() =>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbe28ec650c9408c9897ce633cdef542&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedata = await data.json()
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false
        })
    }

    handleNextClick = async() =>{
        console.log("next");
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
     
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fbe28ec650c9408c9897ce633cdef542&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedata = await data.json()
        
        this.setState({
            page: this.state.page + 1,
            articles: parsedata.articles,
            loading: false
        })
    }
    }

  render() {
  
    return (
      <div className='container my-3' >
           <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
           {this.state.loading && <Spinner/>}
           <div className="row">
           {!this.state.loading && this.state.articles.map((i)=>{
             return <div className="col-md-3" key={i.url}>
             <NewsItem title={i.title?i.title:""} description={i.description?i.description: ""} imageUrl={i.urlToImage} newsUrl={i.url}/>
             </div>
            })}
           </div>
           <div className="container d-flex justify-content-between">
           <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr;Previous</button>
           <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
           </div>
      </div>
    )
  }
}

export default News
