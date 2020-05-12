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
} from "./types";

import * as api from "../server/api";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const ToggleCompletion = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

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
  dispatch({
    type: REMOVE_TODO,
    id,
  });
  try {
    const res = api.deleteTodoApi(id);
    console.log("OUTPUT: removeTodo -> res", res);
  } catch (err) {}
};

export const postDate = (paraTodo) => async (dispatch) => {
  dispatch({ type: CREATE_TODO_START, paraTodo });
  try {
    const res = await api.makePostRequest(paraTodo);
    const data = res.data;
    dispatch({ type: CREATE_TODO_SUCCESS, payload: { data } });
  } catch (err) {
    dispatch({ type: CREATE_TODO_ERROR });
  }
};
