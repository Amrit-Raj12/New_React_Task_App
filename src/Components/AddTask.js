import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddTask = () => {
  let history = useHistory();
  const [task, setTask] = useState({
    message: "",
    due_date: "",
    priority: "",  
    assigned_to: ""
  });

  const { message, due_date, priority, assigned_to } = task;
  const onInputChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  

  const onSubmit = async e => {


      e.preventDefault();


      console.log(task)
      var bodyFormData = new FormData();
      bodyFormData.append('message', task['message']); 
      bodyFormData.append('due_date', task['due_date']); 
      bodyFormData.append('priority', task['priority']); 
      bodyFormData.append('assigned_to', task['assigned_to']); 
      
      axios({
        method: "post",
        url: "https://devza.com/tests/tasks/create",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data", "AuthToken": "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"},
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

      

      history.push("/");
      alert("Added!");
    };
 

  return (
    <>
<div className="body">
<div className="task_container">
    
    <img
      src="https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRhc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
    <div className="task_container-text">
      <h2>Add User's <br/>Task</h2>
      <form>
      <textarea type="text" placeholder="Enter Message" value={message}
            onChange={e => onInputChange(e)} name="message"></textarea>
      <input type="date" value={due_date} name="due_date"
            onChange={e => onInputChange(e)} />
      <input type="text" placeholder="Enter Priority" value={priority}
            onChange={e => onInputChange(e)} name="priority" />
      <input type="text" placeholder="Enter Assigned To" value={assigned_to}
            onChange={e => onInputChange(e)} name="assigned_to" />
      <button type="submit" onClick={onSubmit}>Add</button>
      </form>
      <span>Amrit Raj</span>
    </div>
  </div>
  </div>
  </>
  )
}

export default AddTask
