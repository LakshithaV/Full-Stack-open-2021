import axios from "axios";
const baseUrl = "https://murmuring-scrubland-90833.herokuapp.com/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  //console.log("request: ", request);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
};
