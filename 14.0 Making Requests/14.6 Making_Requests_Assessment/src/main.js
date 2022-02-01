const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function index() {
  return axios.get(`${BASE_URL}/constellations`).then((response) =>{
   console.log(response.data);
  })
}

function create(body) {
 return axios.post(`${BASE_URL}/constellations`, body).then((response) => {console.log(response.data);});
}

function show(id) {
    return axios.get(`${BASE_URL}/constellations/${id}`).then((response) =>{
   console.log(response.data);
  })
}

function update(id, body) {
  return axios.put(`${BASE_URL}/constellations/${id}`,body).then((response) =>{
    console.log(response.data)
  })
}

function destroy(id) {
  return axios.delete(`${BASE_URL}/constellations/${id}`).then((response) =>console.log({}));
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
