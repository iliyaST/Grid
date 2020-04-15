import React from "react";

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
      let content = e.target.innerHTML;
      fetch(`http://localhost:8080/delete/?id=${+content}`).then((res) => {
        console.log("User was deleted!" + res);
        this.props.updateState();
      });
    }

    if (e.target.className === "filter") {
      let content = e.target.innerHTML;
      fetch(`http://localhost:8080/filter/?department=${content}`)
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
      return <th className="sort">{this.state.cellData.value}</th>;
    }
  }
}

export default Cell;
