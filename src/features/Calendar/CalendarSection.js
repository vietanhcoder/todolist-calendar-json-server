import React from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { setDay } from "../../redux/actions";
import { connect } from "react-redux";
import "./css/styles.css";
const CalendarSection = ({ setDay, todos }) => {
  const _onClickDay = (date) => {
    const formatSelectDay = moment(date).format("YYYY-MM-DD");

    setDay(formatSelectDay);
  };

  const _handleSetClassDate = ({ activeStartDate, date, view }) => {
    const todoDate = todos.filter((todo) => {
      return todo.date === moment(date).format("YYYY-MM-DD");
    });
    return todoDate.length > 0 ? "have-todo" : "";
  };

  return (
    <div>
      <Calendar onClickDay={_onClickDay} tileClassName={_handleSetClassDate} />
    </div>
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
  setDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarSection);
