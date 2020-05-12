import React, { useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";

import {
  removeTodo,
  ToggleCompletion,
  fectchTodos,
} from "../../../redux/actions";

const Todo = ({ todos, removeTodo, ToggleCompletion, fectchTodos }) => {
  const _removeTodo = (id) => {
    removeTodo(id);
  };

  const _completeTodo = (id) => {
    ToggleCompletion(id);
  };

  useEffect(() => {
    fectchTodos();
  }, []);

  return (
    <>
      <div className="todo__wrapper">
        <ul className="list-wrapper">
          this is list todo
          {todos.length > 0 ? (
            todos.map((todo, idx) => {
              return (
                <li
                  key={todo.id}
                  className={`todo-item 
                  ${todo.isCompleted ? "li-compelted" : ""}`}
                >
                  <Row
                    style={{
                      display: "flex",
                      aligntodos: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Col xs="1" style={{ textAlign: "center" }}>
                      {idx}
                    </Col>
                    <Col xs="6">
                      <div
                        className={`todo__title ${
                          todo.isCompleted ? "completed" : ""
                        }`}
                      >
                        {todo.title}
                      </div>
                    </Col>
                    <Col>
                      <div className="btn-container">
                        <Button
                          color="success"
                          className="btn-addtodo"
                          size="md"
                          onClick={() => _completeTodo(todo.id)}
                        >
                          {`${todo.isCompleted ? "Completed" : "Complete"}`}
                        </Button>
                        <Button
                          color="danger"
                          className="btn-addtodo"
                          size="md"
                          onClick={() => _removeTodo(todo.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </li>
              );
            })
          ) : (
            <p>Please, add your task to show</p>
          )}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const {
    todoReducers: { todos },
  } = state;
  return {
    todos,
  };
};
const mapDispatchToProps = {
  ToggleCompletion,
  removeTodo,
  fectchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
