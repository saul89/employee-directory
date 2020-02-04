import React from "react";
import Employee from "./Employee";

function Employees({ list }) {
  return (
    <div className="my-3 p-3 bg-white rounded box-shadow">
      {list.map(element => (
        <Employee employee={element} />
      ))}
    </div>
  );
}

export default Employees;
