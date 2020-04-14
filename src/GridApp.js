import React from "react";
import Table from "./grid/Table";
import { MOCK } from "./MOCK_DATA";

function GridApp() {
  return <Table data={MOCK}></Table>;
}

export default GridApp;
