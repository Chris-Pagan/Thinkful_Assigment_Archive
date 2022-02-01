const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function updateIfExists(id, body) {
  const url = `${BASE_URL}/constellations/${id}`;
  return axios.get(url).then((data) =>{
    return data;
  }).then(constellation =>{
    if(!constellation) return Promise.reject(`${constellation} does not exsists`);
    return axios.put(`${BASE_URL}/constellations`, body).then(({data}) => data);
  }).catch(err => `The error is: ${err}`);
}


module.exports = {
  updateIfExists,
};
