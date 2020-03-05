import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogitems: []
    };

    this.getBlogItems = this.getBlogItems.bind(this);
  }

  getBlogItems() {
    axios
      .get("https://herlysarmiento.devcamp.space/portfolio/portfolio_blogs", {
        withCredentials: true
      })
      .then(response => {
        this.setState({ blogitems: response.data.portfolio_blogs });
        // console.log("response", response);
      })
      .catch(error => {
        console.log("getBlogItems error", error);
      });
  }

  componentDidMount() {
    this.getBlogItems();
  }
  render() {
    const blogRecords = this.state.blogitems.map(blogItem => {
      return <h1 key={blogItem.id}>{blogItem.title}</h1>;
    });
    return <div>{blogRecords}</div>;
  }
}

export default Blog;

// this is working code for versions less than ver 17
// react v17 and above is called "unsafe"
