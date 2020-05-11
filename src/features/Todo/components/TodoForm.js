import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { addTodo } from "../../../redux/actions";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const _handleOnChange = (e) => {
    // console.log("_handleOnChange");
    const { value } = e.target;
    if (!value !== "") {
      setTodo(value);
    }
  };
  const _handleAddTodo = () => {
    // console.log("_handleAddTodo");
    const newObj = {
      id: uuidv4(),
      title: todo,
      isComplete: false,
    };
    setTodo("");
    addTodo(newObj);
  };
  return (
    <div>
      <h1>this is todo form</h1>
      <div className="form-wrapper">
        <Form>
          <FormGroup>
            <Label htmlFor="inputTask">
              <h2>Add a new task</h2>
            </Label>
            <Row>
              <Col xs={8}>
                <Input
                  type="text"
                  name="taskName"
                  id="inputTask"
                  placeholder="Please input your task"
                  onChange={_handleOnChange}
                  value={todo}
                />
              </Col>
              <Col xs={2}>
                <Button
                  xs={2}
                  color="primary"
                  className="btn-addtodo"
                  size="md"
                  onClick={_handleAddTodo}
                >
                  Add Task
                </Button>
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addTodo,
};
export default connect(null, mapDispatchToProps)(TodoForm);
