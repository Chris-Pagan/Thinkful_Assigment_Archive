const knex = require("../db/connection");

function averageRating() {
  // your solution here
  return knex("restaurants")
    .avg("rating")
    .then((res) => {
      const data = Number(res[0].avg);
      return data.toFixed(3);
    });
}

function count() {
  // your solution here
  return knex("restaurants")
    .count("*")
    .then((res) => Number(res[0].count))
}

function create(newRestaurant) {
  return knex("restaurants")
    .insert(newRestaurant, "*")
    .then((createdRecords) => createdRecords[0]);
}

function destroy(restaurant_id) {
  return knex("restaurants").where({ restaurant_id }).del();
}

function list() {
  return knex("restaurants").select("*");
}

function read(restaurant_id) {
  return knex("restaurants").select("*").where({ restaurant_id }).first();
}

function readHighestRating() {
  // your solution here
  return knex("restaurants")
        .orderBy("rating", "desc")
        .then((res) => {
          const data = Number(res[0].rating)
          return data.toFixed(2)
  })
}

function update(updatedRestaurant) {
  return knex("restaurants")
    .select("*")
    .where({ restaurant_id: updatedRestaurant.restaurant_id })
    .update(updatedRestaurant, "*");
}

module.exports = {
  averageRating,
  count,
  create,
  delete: destroy,
  list,
  read,
  readHighestRating,
  update,
};
