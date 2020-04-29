import React, { Component } from "react";
import { Props, State, connector } from "./types";
import { Root } from "./styled";

class Template extends Component<Props, State> {
  state = {};

  render() {
    return <Root></Root>;
  }
}

export default connector(Template);
