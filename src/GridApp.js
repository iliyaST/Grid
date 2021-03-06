import React from "react";

import Table from "./grid/Table";
import Spinner from "./common/spinner/Spinner";

class GridApp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  updateState = (data) => {
    if (!data) {
      window.location.reload(false);
    } else {
      this.setState({ data });
    }
  };

  componentDidMount() {
    fetch("http://localhost:8080/getAll")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.state.data.length > 0 ? (
      <Table data={this.state.data} updateState={this.updateState}></Table>
    ) : (
      <Spinner></Spinner>
    );
  }
}

export default GridApp;
