import axios from "axios";
import { URL_APP } from "../configs";
export const apiFetchTodos = async () => {
  return axios.get(URL_APP.URL_API);
};

export const makePostRequest = (newTodo) => {
  return axios({
    method: "POST",
    url: URL_APP.URL_API,
    data: {
      id: newTodo.id,
      title: newTodo.title,
      isCompleted: newTodo.isCompleted,
      date: newTodo.date,
    },
  });
};

export const deleteTodoApi = (id) => {
  return axios({
    method: "DELETE",
    url: `${URL_APP.URL_API}/${id}`,
  });
};
export const toggleTodoApi = (id) => {
  return axios({
    method: "PATCH",
    url: `${URL_APP.URL_API}/${id}`,
  });
};
