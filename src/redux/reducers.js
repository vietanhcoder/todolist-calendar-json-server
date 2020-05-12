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

const initialState = {
  loading: false,
  date: "",
  todos: [],
  error: false,
  postdb: [],
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
      // const { id } = action.payload;
      // const removeIndex = state.todos
      //   .map(function (item) {
      //     return item.id;
      //   })
      //   .indexOf(id);
      // const removeArray = state.todos.splice(removeIndex, 1);
      // return {
      //   ...state,
      //   todos: [...removeArray],
      // };
    }
    // case TOGGLE_TODO: {
    //   return {
    //     ...state,
    //     todos: state.todos.map((todo) => {
    //       if (todo.id === action.payload.id) {
    //         todo.isCompleted = !todo.isCompleted;
    //       }
    //       return todo;
    //     }),
    //   };
    // }

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
    case CREATE_TODO_START: {
      return { ...state, loading: true };
    }
    case CREATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: [action.payload.data, ...state.todos],
      };
    }
    //----------------------------------------------------------------
    default:
      return state;
  }
};
export default reducers;
