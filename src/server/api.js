import axios from "axios";

export const apiFetchDate = async () => {
  return axios.get("http://localhost:4000/date");
};

// export const apiFecthComments = async () => {
//   return axios.get("http://localhost:4000/comments/");
// };

export const makePostRequest = async () => {
  // let res = await axios.post("http://localhost:4000/date");
  return axios.post("http://localhost:4000/date");
};
