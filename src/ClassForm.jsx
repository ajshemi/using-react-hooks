import React, { Component } from "react";

export default class ClassForm extends Component {
  state = {
    name: "",
    grade: "",
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
    this.setState({ name: "", grade: "" });
  };

  render() {
    let { name, grade } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          onChange={this.handleOnChange}
        />
        <label htmlFor="grade">Grade:</label>
        <input
          id="grade"
          type="text"
          name="grade"
          autoComplete="off"
          value={grade}
          onChange={this.handleOnChange}
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
