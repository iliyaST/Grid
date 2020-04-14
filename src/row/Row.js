import React from "react";
import Cell from "../../cell/Cell";

const Row = ({ rowData, tagProp }) => {
  const cells = Object.keys(rowData).map((key) => {
    return (
      <Cell
        tagProp={tagProp}
        cellData={{ value: rowData[key], key }}
        key={key}
      ></Cell>
    );
  });

  return <tr>{cells}</tr>;
};

export default Row;
