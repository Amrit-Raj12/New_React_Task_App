import React, { useState, useEffect } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Modal, Button, Badge } from "react-bootstrap";
import { useHistory } from "react-router-dom";




function MyVerticallyCenteredModal(props) {
  let history = useHistory();
  const [edittask, setEditTask] = useState({
    message: "",
    due_date: "",
    priority: "",
    assigned_to: "",
    taskid: "",
  });

  const { message, due_date, priority, assigned_to, taskid } = edittask;
  const onEditInputChange = (e) => {
    setEditTask({ ...edittask, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(edittask);
    var bodyFormData = new FormData();
    bodyFormData.append("message", edittask["message"]);
    bodyFormData.append("due_date", edittask["due_date"]);
    bodyFormData.append("priority", edittask["priority"]);
    bodyFormData.append("assigned_to", edittask["assigned_to"]);
    bodyFormData.append("taskid", edittask["taskid"]);

    axios({
      method: "post",
      url: "https://devza.com/tests/tasks/update",
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
      },
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
    props.onHide();
    alert("Updated!")
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal_body">
          <div className="task_container">
            <img
              src="https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRhc2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="task_container-text">
              <h2>
                Update User's <br />
                Task
              </h2>
              <form>
                <textarea
                  type="text"
                  placeholder="Enter Message"
                  name="message"
                  value={message}
                  onChange={(e) => onEditInputChange(e)}
                ></textarea>
                <input
                  type="date"
                  name="due_date"
                  value={due_date}
                  onChange={(e) => onEditInputChange(e)}
                />
                <input
                  type="text"
                  placeholder="Enter Priority"
                  name="priority"
                  value={priority}
                  onChange={(e) => onEditInputChange(e)}
                />
                <input
                  type="text"
                  placeholder="Enter Assigned To"
                  name="assigned_to"
                  value={assigned_to}
                  onChange={(e) => onEditInputChange(e)}
                />
                <input
                  type="text"
                  placeholder="Enter ID"
                  name="taskid"
                  value={taskid}
                  onChange={(e) => onEditInputChange(e)}
                />
                <button type="submit" onClick={onSubmit}>
                  Update
                </button>
              </form>
              <span>Amrit Raj</span>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn-dark">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Users = () => {
  let history = useHistory();
  const [tasks, setTasks] = useState([]);

  const [modalShow, setModalShow] = useState(false);



  useEffect(() => {
    async function makeRequest() {
      const config = {
        method: "get",
        url: "https://devza.com/tests/tasks/list",
        headers: {
          AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
        },
      };

      const ress = await axios(config);

      setTasks(ress.data.tasks);
      console.log(ress.status);
      console.log(ress.data);
    }
    makeRequest();
  }, []);

  const deleteTask = async () => {
    history.push("/delete");
  };

  const columns = [
    { dataField: "id", text: "ID" },
    { dataField: "assigned_name", text: "Name", filter: textFilter() },
    { dataField: "message", text: "Message" },
    { dataField: "created_on", text: "Created On", sort: true },
    { dataField: "priority", text: "Priority", sort: true },
    { dataField: "assigned_to", text: "Assigned To", sort: true },
    {
      dataField: "link",
      text: "ACTION",
      formatter: (rowContent, row) => {
        return (
          <>
            <a style={{ cursor: "pointer" }} onClick={() => setModalShow(true)}>
              <Badge pill bg="info">
                Edit
              </Badge>
            </a>
            {/* <a href="#" className="primary"> Edit</a> */}
            <span>&nbsp;&nbsp;</span>
            <a
              className="danger"
              style={{ cursor: "pointer" }}
              onClick={deleteTask}
            >
              {" "}
              <Badge pill bg="danger">
                Delete
              </Badge>
            </a>
          </>
        );
      },
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  return (
    <div className="task_main">
     
      <h2 bg="dark">Task List</h2>

      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={tasks}
        pagination={pagination}
        filter={filterFactory()}
      />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Users;
