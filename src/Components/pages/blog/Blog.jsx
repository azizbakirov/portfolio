import "./blog.scss";
import React, { Component } from "react";
import ReactDOM from "react-dom";;
import Bg from "./img/bg.jpg";
import Post from "./img/post/post.jpg";
import Post2 from "./img/post/post 2.jpg";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];


class Blog extends Component {
  render() {
    return <ImageGallery items={images}
     />;
  }
}

export default Blog;
