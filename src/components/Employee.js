import React from "react";
import "../styles/Employee.css";

function Employee({ employee }) {
  return (
    <div className="employee media text-muted rounded-sm mb-2 border border-primary container">
      <div className="container">
        <div className="row">
          <div className="col-sm p-0">
            <img
              src={employee.picture}
              alt="80x80"
              className="mr-2 rounded"
              style={{ width: "80px", height: "80px" }}
            ></img>
          </div>
          <div className="col-sm">
            <h5 style={{ height: "80px", lineHeight: "80px" }}>
              {employee.name}
            </h5>
          </div>
          <div className="col-sm">
            <h5 style={{ height: "80px", lineHeight: "80px" }}>
              {employee.jobTitle}
            </h5>
          </div>
          <div className="col-sm">
            <h5 style={{ height: "80px", lineHeight: "80px" }}>
              {employee.email}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
