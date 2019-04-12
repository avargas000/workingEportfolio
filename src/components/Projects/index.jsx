import React, { Component } from "react";
import "./index.scss";
import ParallaxImage from "react-image-parallax2";

import projectArray from "./index.json";

export default class AllProjects extends React.Component {
  constructor(props) {
    this.state = {};
    super(props);
    this.state = {
      id: "projectSection"
    };
  }

  render() {
    console.log("This works too!");
    return (
      <div>
        <div>
          <div />
          <h3>{this.state.title}</h3> <br />
          <p>{this.state.content}</p>
        </div>
        <ParallaxImage reduceHeight={1 / 3}  />
        <div>
          <h3>{this.state.titleTwo}</h3> <br />
          <p>{this.state.contentTwo}</p>
        </div>

        <ParallaxImage reduceHeight={1 / 3}  />
        <div>
          <h3>{this.state.titleThree}</h3> <br />
          <p>{this.state.contentThree}</p>
        </div>
        <ParallaxImage reduceHeight={1 / 3}  />

        <div>
          <h3>{this.state.titleFour}</h3> <br />
          <p>{this.state.contentFour}</p>
        </div>
      </div>
    );
  }
}
