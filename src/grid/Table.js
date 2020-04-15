import React from "react";
import "./grid-style.css";
import Row from "./row/Row";
import { KEYS_MAP } from "../common/constants";

const Table = ({ data }) => {
  const headerRowsObject = Object.keys(data[0]).reduce((acc, curr) => {
    acc[curr] = KEYS_MAP[curr];
    return acc;
  }, {});

  const bodyRows = data.map((el) => {
    return <Row tagProp="td" key={el.id} rowData={el}></Row>;
  });

  return (
    <table>
      <thead>
        <Row tagProp="th" key="head" rowData={headerRowsObject}></Row>
      </thead>
      <tbody>{bodyRows}</tbody>
    </table>
  );
};

export default Table;
