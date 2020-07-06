import React, { useState } from "react";
// import useForm from "./useForm";

const FunctionForm = (props) => {
  //   const [values, handleOnChange] = useForm({ name: "", grade: "" });
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  //keys of your states needs to match name of input

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addStudent({ name, grade });
    setName("");
    setGrade("");
    // props.addStudent(values); //invoke function, sending info back up to app
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        autoComplete="off"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="grade">Grade:</label>
      <input
        id="grade"
        type="text"
        name="grade"
        autoComplete="off"
        value={grade}
        onChange={handleGradeChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default FunctionForm;
