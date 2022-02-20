import React, { Component } from "react";
import { Card, Col, Container, Row } from "reactstrap";

import news1 from "../../assets/images/construction/o1.jpg";
import new2 from "../../assets/images/construction/b1.jpg";
import news3 from "../../assets/images/construction/r1.jpg";
import { Link } from "react-router-dom";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id: 1,
          img: news1,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 2,
          img: new2,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
        {
          id: 3,
          img: news3,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        },
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
       
      </React.Fragment>
    );
  }
}
