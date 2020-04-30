import React, { Component } from "react";

const key = process.env.REACT_APP_KEY;

class Breed extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
    };
  }
  getData = async () => {
    const DOG_API = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${
        this.props.name + "+dog"
        // "dog+" + this.props.name
        // this.props.name + "+dog"
      }&limit=1`
    );
    const DOG_DATA = await DOG_API.json();
    console.log(DOG_DATA);
    // const RANDOM = Math.floor(Math.random() * 5);
    // const DOG_PIC = DOG_DATA.data[RANDOM].images.downsized_medium.url;
    const DOG_PIC =
      DOG_DATA.data && DOG_DATA.data.length !== 0
        ? DOG_DATA.data[0].images.downsized_medium.url
        : "https://placekitten.com/100/100";
    const DOG_IMG =
      !DOG_PIC || typeof DOG_PIC === typeof undefined || DOG_PIC === ""
        ? "https://media.giphy.com/media/moXqsEVbHOQtG/giphy.gif"
        : DOG_PIC;
    this.setState({
      image: DOG_IMG,
    });
  };
  componentDidMount = () => {
    this.getData();
  };
  render(props) {
    return (
      <div className="pic">
        <img className="pic__thumb" alt="" src={this.state.image} />
        <p className="pic__title">{this.props.name}</p>
      </div>
    );
  }
}

export default Breed;
