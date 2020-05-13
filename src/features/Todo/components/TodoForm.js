import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { postDate } from "../../../redux/actions";
import "react-datepicker/dist/react-datepicker.css";
const TodoForm = ({ postDate, dateCalendar }) => {
  const [todo, setTodo] = useState("");
  const _handleOnChange = (e) => {
    const { value } = e.target;
    if (!value !== "") {
      setTodo(value);
    }
  };

  const _handleAddTodo = () => {
    const newObj = {
      title: todo,
      isCompleted: false,
      date: dateCalendar,
    };
    setTodo("");
    postDate(newObj);
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

const mapStateToProps = (state) => {
  const {
    todoReducers: { dateCalendar },
  } = state;
  return {
    dateCalendar,
  };
};
const mapDispatchToProps = {
  postDate,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
