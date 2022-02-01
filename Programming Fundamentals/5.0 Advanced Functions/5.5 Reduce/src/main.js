/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
    let accumulator = 0;
  let total = parks.reduce((acc, item) => acc + item.areaInSquareKm, accumulator);
  return total;
}

function parkNameAndState(parks) {
  return parks.reduce((acc, park)=> {
    acc[park.name] = park.location.state;
    return acc;
  },{})
}

function parkByState(parks) {
  return parks.reduce((acc, park)=>{
    let state = park.location.state;
    if (acc[state]){
      acc[state].push(park);
    } else {
      acc[state]=[park];
    }
    return acc;
  }, {})
}

module.exports = { squareKmTotal, parkNameAndState, parkByState };
