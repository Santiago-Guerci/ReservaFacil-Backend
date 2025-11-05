import RestaurantModel from "../models/restaurants.model.js";
//una vez que haga el factory tengo q reemplazar acá

const postRestaurant = async (data) => {
  const restaurant = await RestaurantModel.createRestaurant(data);
  return restaurant;
};

const getAllRestaurants = async () => {
  const restaurants = await RestaurantModel.getRestaurants();
  return restaurants;
};

const getRestaurantById = async (id) => {
  const restaurant = await RestaurantModel.getRestaurantById(id);
  return restaurant;
};

const updateRestaurant = async (id, updates) => {
  const updatedRestaurant = await RestaurantModel.updateRestaurant(id, updates);
  return updatedRestaurant;
};

const deleteRestaurant = async (id) => {
  const deletedRestaurant = await RestaurantModel.deleteRestaurant(id);
  return deletedRestaurant;
};

export default {
  postRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
