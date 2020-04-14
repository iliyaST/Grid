import React from "react";
import Table from "./grid/Table";
import "./common/spinner.css";

class GridApp extends React.Component {
  constructor() {
    super();
    this.state = {
      data: undefined,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/getAll")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return this.state.data ? (
      <Table data={this.state.data}></Table>
    ) : (
      <div class="lds-dual-ring"></div>
    );
  }
}

export default GridApp;
