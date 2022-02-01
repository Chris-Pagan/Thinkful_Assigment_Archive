const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}
async function update(constellation) {
  try {
    const isRealConst = await isValid(constellation);
    const url = `${BASE_URL}/constellations/${constellation.id}`
    if (isRealConst) {
      return id = await axios.put(url, constellation);

    }
  } catch (error) {
    return `Updating constellation (id: ${id}) failed.`;
  }
}

async function bulkImport(constellations) {
  try {
    for (let constellation in constellations){
      await update(constellations);
    }
    
    }
   catch (error) {
    console.log(error);
  }
}

Promise.allSettled();

Promise.allSettled();

module.exports = { bulkImport, update };
