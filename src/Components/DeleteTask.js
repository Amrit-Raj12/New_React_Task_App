import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";


const DeleteTask = () => {

    
    let history = useHistory();
  const [deletetask, setDeleteTask] = useState({
    taskid:""
  });

  const { taskid } = deletetask;
  const onDeleteInputChange = e => {
    setDeleteTask({ ...deletetask, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {


      e.preventDefault();


      console.log(deletetask)
      var bodyFormData = new FormData();
      bodyFormData.append('taskid', deletetask['taskid']); 
      
      axios({
        method: "post",
        url: "https://devza.com/tests/tasks/delete",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data", "AuthToken": "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a"},
      })
        .then(function (response) {
        
          console.log(response);
        })
        .catch(function (response) {
        
          console.log(response);
        });
       
      history.push("/list");
      alert("Deleted!")
    };



    return (
        <>
        <div>
            <div className="modal_body">
 <div className="task_container">
    
     <img src="https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRhc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"  alt=""/>
     <div className="task_container-text">
       <h2>Delete User's <br/>Task</h2>
       <form>
      
       <input type="text" placeholder="Enter ID" name="taskid" value={taskid} onChange={e => onDeleteInputChange(e)} />
       <button type="submit" className="btn-danger" onClick={onSubmit}>Delete</button>
       </form>
       <span>Amrit Raj</span>
     </div>
   </div>
   </div>
        </div>
        </>
    )
}

export default DeleteTask
