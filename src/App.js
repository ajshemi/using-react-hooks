import React, { useState } from "react";
import "./App.css";
// import ClassForm from "./ClassForm";
import FunctionForm from "./FunctionForm";
import data from "./data";

const StudentsContainer = (props) => {
  let arrayOfComponents = props.students.map((studentObj) => (
    <Student key={studentObj.id} student={studentObj} />
  ));
  return <>{arrayOfComponents}</>;
};
// export default studentsContainer;

const Student = (props) => {
  let { name, grade } = props.student;
  return (
    <div className="container">
      <p>
        <span>{name} is in grade: </span>
        {grade}
      </p>
    </div>
  );
};

function App() {
  const [students, setStudents] = useState(data);
  const addStudentFunction = (info) => {
    console.log(info);
    let newId = students.length + 1;
    let newStudent = { ...info, id: newId };
    let newStudents = [...students, newStudent];
    console.log(newStudent);
    setStudents(newStudents);
  }; //send a function definition
  return (
    <div className="App">
      {/* <Joke /> */}
      {/* <ClassForm addStudent={addStudentFunction} /> */}
      <StudentsContainer students={students} />
      <FunctionForm addStudent={addStudentFunction} />
    </div>
  );
}

export default App;
