import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:6,
    category: 'science'
  }
  // static propsTypes={
  //   country:PropTypes.string,
  //   pageSize:PropTypes.number,
  //   category: PropTypes.string 

  // }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading: false,
      page:1,
      totalResults:0
    }
    document.title= "NewsMonkey - " +this.props.category;
  }

  async componentDidMount(){
    this.props.setProgress(10);
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dacae53a3dd04f3598cfd0f5e3ee2afb&page=1&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false})
      this.props.setProgress(100);
  }

  handleNextClick =async()=>{
    if(!(this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dacae53a3dd04f3598cfd0f5e3ee2afb&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedData=await data.json();
    

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading:false
    })
  }}

  handlePreClick =async()=>{

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dacae53a3dd04f3598cfd0f5e3ee2afb&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData=await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    })
  }
   fetchMoreData = async () => {
    this.setState({page: this.state.page+1})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dacae53a3dd04f3598cfd0f5e3ee2afb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    let data= await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles: this.state.articles.concat( parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading:false
    })
  };
  render() {
    return (
      <>
        <h2 className="text-center ">NewsMonkey - Top  {this.props.category} Headlines </h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="conatiner ">
        <div className="row">
        {this.state.articles.map((element)=>{
        return  <div className="col md-3" key={element.url}>
          <NewsItem  title={element.title?element.title:""} descrption={element.description?element.description:""} 
          url={element.urlToImage} newsUrl={element.url}  date={element.publishedAt} source={element.source.name} />
          </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  }
}

export default News
