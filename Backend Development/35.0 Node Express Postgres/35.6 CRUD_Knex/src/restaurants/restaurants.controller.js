const restaurantsService = require("./restaurants.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const hasProperties = require("../errors/hasProperties")
const hasRequiredProperties = hasProperties("restaurant_name", "cuisine", "address")
const VALID_FIELDS = ["restaurant_name", "cuisine", "address"]

function hasValidFields(req, res, next){
  const { data = {} } = req.body;
  const invalidFields = Object.keys(data).filter(
    (property) => !VALID_FIELDS.includes(property))
  if(invalidFields.length){
    return next({
      status: 400,
      message: `${invalidFields}`
    })
  }
  next()
}

async function restaurantExists(req, res, next) {
  const { restaurantId } = req.params;
  const restaurant = await restaurantsService.read(restaurantId);
  if (restaurant) {
    res.locals.restaurant = restaurant;
    return next();
  }
  next({ status: 404, message: `Restaurant cannot be found.` });
}

async function list(req, res, next) {
  const data = await restaurantsService.list();
  res.json({ data });
}



async function create(req, res, next) {
  // your solution here
  const { data = {} } = req.body;
  await restaurantsService
    .create(data)
    .then(data => res.status(201).json({ data }))
    .catch(next);
}

async function read(req, res, next){
  res.json({ data: res.locals.restaurant})
}

async function update(req, res, next) {
  const updatedRestaurant = {
    ...res.locals.restaurant,
    ...req.body.data,
    restaurant_id: res.locals.restaurant.restaurant_id,
  };

  const data = await restaurantsService.update(updatedRestaurant);

  res.json({ data });
}

async function destroy(req, res, next) {
  // your solution here
  await restaurantsService
    .delete(res.locals.restaurant.restaurant_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(restaurantExists), read],
  create: [hasValidFields, hasRequiredProperties, create],
  update: [asyncErrorBoundary(restaurantExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(restaurantExists), asyncErrorBoundary(destroy)],
};
