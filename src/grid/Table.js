import React from "react";
import "./grid-style.css";
import Row from "./row/Row";
import { Mapper } from "../common/constants";

const Table = ({ data, updateState }) => {
  const headerRowsObject = Object.keys(data[0]).reduce((acc, curr) => {
    acc[curr] = Mapper.KEYS_MAP[curr];
    return acc;
  }, {});

  const bodyRows = data.map((el) => {
    return (
      <Row
        tagProp="td"
        key={el.id}
        rowData={el}
        updateState={updateState}
      ></Row>
    );
  });

  return (
    <table>
      <thead>
        <Row
          tagProp="th"
          key="head"
          rowData={headerRowsObject}
          updateState={updateState}
        ></Row>
      </thead>
      <tbody>{bodyRows}</tbody>
    </table>
  );
};

export default Table;
