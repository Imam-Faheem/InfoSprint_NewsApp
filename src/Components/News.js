import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';

import PropTypes from 'prop-types';

export default class News extends Component {

  static defaultProps = {
    pageSize: 20,
    country: 'in',
    category: '',
    newsType: 'top-headlines'
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    newsType: PropTypes.string
  }
  
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
      category: this.props.category,
    }
    this.updateDocumentTitle();
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  updateDocumentTitle = () => {
    const documentTitle = this.state.category
      ? `${this.capitalizeFirstLetter(this.state.category)} - InfoSprint`
      : 'InfoSprint - All Headlines';
    document.title = documentTitle;
  }

  async componentDidMount() {
    this.setState({ loading: true });
    if (this.props.category) {
     await this.fetchArticlesWithCategory();
    } else {
     await this.fetchTopHeadlines();
    }
    this.props.setProgress(30);
  }

  
  fetchTopHeadlines = async () => {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/everything?q=bitcoin%20OR%20(domains%3Atechcrunch.com%20OR%20thenextweb.com)%20OR%20(apple%20AND%20from%3A2023-08-15%20AND%20to%3A2023-08-15%20AND%20sortBy%3Apopularity)&apiKey=${this.props.apiKey}&page=1&pageSize=100`;
    this.setState({ page: this.state.page + 1 });
    this.fetchArticles(url)
    this.props.setProgress(100);
  }

  fetchArticlesWithCategory = async () => {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/${this.props.newsType}?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 });
    this.fetchArticles(url);
    this.props.setProgress(100);
  }

  fetchArticles = async (url) => {
    this.setState({ loading: true });
    const response = await fetch(url);
    const parsedData = await response.json();
    this.props.setProgress(70);
    this.setState(prevState => ({
      articles: [...prevState.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      loading: false,
    }));
    this.props.setProgress(100); 
  }

  fetchMoreData = async () => {
    if (this.props.category) {
      this.fetchArticlesWithCategory();
    } else {
      this.fetchTopHeadlines();
    }
  };
  
  render() {
    const { articles, totalResults, loading } = this.state;

    return (
      <>
        {this.state.category ? (
          <h2 style={{marginTop:"100px"}} className="text-center">InfoSprint - Top {this.capitalizeFirstLetter(this.state.category)} Headlines</h2>
        ) : (
          <h2 style={{marginTop:"100px"}} className="text-center">InfoSprint - All Headlines</h2>
        )};
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
        dataLength={articles.length}
        next={this.fetchMoreData}
        hasMore={articles.length < totalResults} // Change this condition
        loader={loading && <Spinner />}
        >
          <div className="container">
            <div className="row mt-0">
              {articles.map((element) => (
                <div className="col-sm-6 col-md-4 col-xl-3 mb-1" key={element.url}>
                  <Newsitem
                    source={element.source && element.source.name ? element.source.name : "Unknown Source"}
                    title={element.title ? element.title.slice(0, 110) : "Unveiling the Unseen: A Story Beyond Headlines"}
                    description={element.description ? element.description.slice(0, 130) : "Dive into the Heart of the Story: Beyond Words and into the Pulse of the News"}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author.slice(0, 30) : "Unknown author"}
                    publishedAt={element.publishedAt ? element.publishedAt.slice(0, 10) : "Unknown date"}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}