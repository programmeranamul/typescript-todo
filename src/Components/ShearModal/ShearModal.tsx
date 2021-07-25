import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"

interface ITodo {
  title: string,
  lastDate?: string,
  status: string
}

interface IProps {
  show: boolean,
  handleClose: () => void,
  todoList: ITodo[],
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
}


const ShearModal = ({ show, handleClose, todoList, setTodoList }: IProps) => {
  const [titleError, setTitleError] = useState("")
  const [todo, setTodo] = useState<ITodo>({} as ITodo)
  const createTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value })
  }
  console.log(titleError)
  console.log(todo)
  const handleSave = () => {

    // if (todo.title === "") {
    //   setTitleError("Title is required.")
    //   return
    // }else {
    //   setTodoList([...todoList, todo])
    //   setTodo({
    //     title: "",
    //     lastDate: "",
    //     status: "",
    //   })
    //   handleClose()
    // }
    

    if(2 < 3) {
      console.log("object");
      setTitleError("Title is required.")
      return
    }else{
      console.log("object 34");
      handleClose()
    }

  }


  console.log(todoList)
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={todo.title} onChange={createTodo} placeholder="Title Here" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
            <Form.Label>Last Date</Form.Label>
            <Form.Control type="date" name="lastDate" value={todo.lastDate} placeholder="Last Date" onChange={createTodo} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1" className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Check
              type="radio"
              label="Paindding"
              id="formHorizontalRadios1"
              name="status"
              onChange={createTodo}
              value="Paindding"
            />
            <Form.Check
              type="radio"
              label="Done"
              id="formHorizontalRadios1"
              name="status"
              onChange={createTodo}
              value="Done"
            />

          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default ShearModal;
