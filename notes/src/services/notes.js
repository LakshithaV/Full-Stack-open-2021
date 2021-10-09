import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  //console.log("request: ", request);
  return request.then((response) => response.data);
};

export default { getAll };