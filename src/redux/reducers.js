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

const initialState = {
  loading: false,
  date: "",
  todos: [],
  error: false,
};
const reducers = (state = initialState, action) => {
  switch (action.type) {
    //----------------------------------------------------------------
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    //----------------------------------------------------------------
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      };
    }

    //----------------------------------------------------------------
    case FETCH_DATE_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_DATE_SUCCESS: {
      return {
        ...state,
        todos: action.payload.data,
        loading: false,
      };
    }
    case FETCH_DATE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    //----------------------------------------------------------------

    //----------------------------------------------------------------
    default:
      return state;
  }
};
export default reducers;
