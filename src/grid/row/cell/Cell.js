import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tagName: props.tagProp, // should be isHeader (boolean)!!
      cellData: props.cellData,
    };
  }

  cellClicked(e) {
    if (e.target.className === "delete") {
    }

    if (e.target.className === "filter") {
      //   let content = e.target.innerHTML;
      //   console.log(content);
      //   fetch(`http://localhost:8080/filter/${content}`);
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
