import React, { Component } from "react";
import Employees from "./Employees";
import "../styles/Main.css";

let employeeList = [
  {
    name: "Angela",
    jobTitle: "Marketing Specialist",
    email: "marco@company.ie",
    picture: "images/marketing_specialist.png"
  },
  {
    name: "Simone",
    jobTitle: "IT Manager",
    email: "simone@company.ie",
    picture: "images/it_manager.png"
  },
  {
    name: "Francesco",
    jobTitle: "Business Analyst",
    email: "francesco@company.ie",
    picture: "images/business_analyst.png"
  },
  {
    name: "Sofia",
    jobTitle: "CFO",
    email: "sofia@company.ie",
    picture: "images/cfo.png"
  },
  {
    name: "Thomas",
    jobTitle: "HR Manager",
    email: "thomas@company.ie",
    picture: "images/hr_manager.png"
  },
  {
    name: "Rita",
    jobTitle: "Accountant",
    email: "rita@company.ie",
    picture: "images/accountant.png"
  },
  {
    name: "Sara",
    jobTitle: "CEO",
    email: "sara@company.ie",
    picture: "images/ceo.png"
  }
];

class Main extends Component {
  // Setting the component's initial state
  state = {
    search: "",
    employeeList: employeeList
  };

  handleInputChange = event => {
    // Getting the value of the input which triggered the change
    const { value } = event.target;

    let filteredList = employeeList.filter(
      employee =>
        employee.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        employee.jobTitle
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        employee.email.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    // Updating the input's state
    this.setState({
      search: value,
      employeeList: filteredList
    });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Employee Directory</h1>
        <form className="main form my-3 p-3 bg-white rounded box-shadow container">
          <input
            className="form-control"
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search Employee..."
          />
        </form>
        <div>
          <Employees list={this.state.employeeList} />
        </div>
      </div>
    );
  }
}

export default Main;
