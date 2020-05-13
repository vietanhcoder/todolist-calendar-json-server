import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_DATE_START,
  FETCH_DATE_SUCCESS,
  FETCH_DATE_ERROR,
  CREATE_TODO_START,
  CREATE_TODO_SUCCESS,
  CREATE_TODO_ERROR,
  SET_DAY,
} from "./types";

import * as api from "../server/api";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const ToggleCompletion = (id, isCompleted) => async (dispatch) => {
  try {
    const res = await api.toggleTodoApi(id);
    const data = res.data;
    dispatch({
      type: TOGGLE_TODO,
      payload: { data },
    });
  } catch (err) {
    alert("can't toggle it");
  }
};

export const fectchTodos = () => async (dispatch) => {
  dispatch({ type: FETCH_DATE_START });
  try {
    const res = await api.apiFetchTodos();
    const data = res.data;
    dispatch({ type: FETCH_DATE_SUCCESS, payload: { data } });
  } catch (err) {
    dispatch({ type: FETCH_DATE_ERROR });
  }
};

export const removeTodo = (id) => async (dispatch) => {
  try {
    await api.deleteTodoApi(id);
    dispatch({
      type: REMOVE_TODO,
      payload: { id },
    });
  } catch (err) {
    alert("can't remove todo");
  }
};

export const postDate = (newTodo) => async (dispatch) => {
  dispatch({ type: CREATE_TODO_START, newTodo });
  try {
    const res = await api.makePostRequest(newTodo);
    const data = res.data;
    dispatch({ type: CREATE_TODO_SUCCESS, payload: { data } });
  } catch (err) {
    dispatch({ type: CREATE_TODO_ERROR });
  }
};
export const setDay = (payload) => ({
  type: SET_DAY,
  payload,
});
