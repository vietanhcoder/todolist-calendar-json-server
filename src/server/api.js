import axios from "axios";
import { URL_APP } from "../configs";
export const apiFetchTodos = async () => {
  return axios.get(URL_APP.URL_API);
};

export const makePostRequest = (newTodo) => {
  // let res = await axios.post("http://localhost:4000/date");
  return axios({
    method: "POST",
    url: URL_APP.URL_API,
    data: {
      id: newTodo.id,
      title: newTodo.title,
      isComplete: newTodo.isComplete,
      date: newTodo.date,
    },
  });
};

export const deleteTodoApi = (id) => {
  return axios({
    method: "DELETE",
    url: `URL_APP.URL_API/${id}`,
  });
};
