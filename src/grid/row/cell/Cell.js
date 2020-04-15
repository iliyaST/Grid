import React from "react";
import { Mapper } from "../../../common/constants";

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagName: props.tagProp, // should be isHeader (boolean)!!
      cellData: props.cellData,
    };

    this.cellClicked = this.cellClicked.bind(this);
  }

  cellClicked(e) {
    if (e.target.className === "delete") {
      let id = e.target.innerHTML;
      fetch(`http://localhost:8080/delete/?id=${+id}`).then((res) => {
        console.log("User was deleted!" + res);
        this.props.updateState();
      });
    }

    if (e.target.className === "filter") {
      let departmentName = e.target.innerHTML;
      fetch(`http://localhost:8080/filter/?department=${departmentName}`)
        .then((response) => response.json())
        .then((users) => {
          this.props.updateState(users);
        });
    }

    if (e.target.className === "sort") {
      let attribute = e.target.innerHTML;
      fetch(
        `http://localhost:8080/sort/?attribute=${Mapper.REVERSED_KEYS_MAP[attribute]}`
      )
        .then((response) => response.json())
        .then((users) => {
          this.props.updateState(users);
        });
    }
  }

  render() {
    //TODO: refactor
    // needs refactoring...

    let mapper = {
      id: "delete",
      department: "filter",
    };

    let classIdentifier = mapper[this.state.cellData.key]
      ? mapper[this.state.cellData.key]
      : "";

    if (this.state.tagName === "td") {
      return this.state.cellData.key === "email" ? (
        <td className={classIdentifier}>
          <a href={"mailto:" + this.state.cellData.value}>
            {this.state.cellData.value}
          </a>
        </td>
      ) : (
        <td className={classIdentifier} onClick={this.cellClicked}>
          {this.state.cellData.value}
        </td>
      );
    } else {
      return (
        <th className="sort" onClick={this.cellClicked}>
          {this.state.cellData.value}
        </th>
      );
    }
  }
}

export default Cell;
