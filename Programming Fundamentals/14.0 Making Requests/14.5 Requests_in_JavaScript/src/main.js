const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  return axios.get(`${BASE_URL}/constellations`).then((response) =>{
    const result = response.data.map((data) => {
      return data.name;
    })
    console.log(result);
    return result;
  }).catch((error) => {console.log(error.message);});
}


function getConstellationsByQuadrant(quadrant) {
  return axios.get(`${BASE_URL}/constellations`).then((response) =>{
    const result = response.data.filter((data) => data.quadrant === quadrant);
    console.log(result);
    return result;
}).catch((error) => {console.log(error.message);});
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
