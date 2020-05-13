import {
  TOGGLE_TODO,
  REMOVE_TODO,
  FETCH_DATE_START,
  FETCH_DATE_SUCCESS,
  FETCH_DATE_ERROR,
  CREATE_TODO_START,
  CREATE_TODO_SUCCESS,
  SET_DAY,
} from "./types";

const initialState = {
  loading: false,
  dateCalendar: "",
  todos: [],
  error: false,
  showTodoDate: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    //----------------------------------------------------------------
    case REMOVE_TODO: {
      const { id } = action.payload;
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      return {
        ...state,
        todos: newTodos,
      };
    }

    //----------------------------------------------------------------
    case TOGGLE_TODO: {
      const { id } = action.payload.data;
      const toggleTodo = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return {
        ...state,
        todos: toggleTodo,
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
      // const filterTodoDate = state.action.payload.data.filter((todoDate) => {
      //   if (todoDate.date === state.dateCalendar) {
      //     return todoDate;
      //   }
      //   return null;
      // });
      // console.log("OUTPUT: reducers -> filterTodoDate", filterTodoDate);
      // state.action.payload.data

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
    //----------------------------------------------------------------
    case CREATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        todos: [action.payload.data, ...state.todos],
      };
    }
    //----------------------------------------------------------------
    case SET_DAY: {
      return {
        ...state,
        dateCalendar: action.payload,
      };
    }
    //----------------------------------------------------------------
    default:
      return state;
  }
};
export default reducers;
