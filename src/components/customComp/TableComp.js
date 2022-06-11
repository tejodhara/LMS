import React from "react";
import { Table } from "react-bootstrap";

function TableComp({ tablehead, tabelbody, children , ...props}) {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            {tablehead.map((val, index) => (
              <th key={index}> {val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {tabelbody.map((val, index) => (
              <td key={index}> {val}</td>
            ))}
            {children}
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableComp;
