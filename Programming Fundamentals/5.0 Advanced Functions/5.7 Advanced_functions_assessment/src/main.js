/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

function getParksByState(parks, state) {
  return parks.filter((park) => park.location.state === state);
}

function getWishlistParksForUser(parks, users, username) {
  // returns array of park objects on wishlist of username
  let {wishlist} = users[username];
  return wishlist.map((id) => parks.find((park) =>park.id === id));
}

function userHasVisitedAllParksInState(parks, users, state, username) {
  //returns true if username has visited all parks in the state
  let parkByState = parks.filter((park) => park.location.state === state);
  console.log("park by state", parkByState);
  let user = users[username];
  console.log("user", user);
  return parkByState.every((park) => user.visited.includes(park.id))
}

function userHasVisitedParkOnWishlist(users, usernameA, usernameB) {
  //returns true if userA has visited any park on userB's wishlist
  let user1 = users[usernameA];
  let user2 = users[usernameB];
  return user1.visited.some((id) => user2.wishlist.includes(id));
}

function getUsersForUserWishlist(users, selected) {
  //returns all usernames who have visited any park on user's wishlist
  let user = Object.keys(users)
  return user.reduce((acc, username) =>{
    const hasVisited = userHasVisitedParkOnWishlist(users, username, selected);
    if (hasVisited) acc.push(username);
    return acc;
  }, [])
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
