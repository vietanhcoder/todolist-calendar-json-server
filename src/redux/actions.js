import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_DATE_START,
  FETCH_DATE_SUCCESS,
  FETCH_DATE_ERROR,
  API_POST_SUCCESS,
  API_POST_ERROR,
  API_POST_START,
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

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const fectchDate = () => async (dispatch) => {
  dispatch({ type: FETCH_DATE_START });
  try {
    const res = await api.apiFetchDate();
    const data = res.data;
    dispatch({ type: FETCH_DATE_SUCCESS, payload: { data } });
  } catch (err) {
    dispatch({ type: FETCH_DATE_ERROR });
  }
};

export const postDate = () => async (dispatch) => {
  dispatch({ type: API_POST_START });
  try {
    const res = await api.makePostRequest();
    const data = res.data;
    dispatch({ type: API_POST_SUCCESS, payload: { data } });
  } catch (err) {
    dispatch({ type: API_POST_ERROR });
  }
};
