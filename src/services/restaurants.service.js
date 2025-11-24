
import RestaurantModel from "../models/restaurants.model.js";
import ReservationsModel from "../models/reservations.model.js"; 

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


const getLeastBookedRestaurant = async () => {
  
  const [restaurants, reservations] = await Promise.all([
    RestaurantModel.getRestaurants(),
    ReservationsModel.getReservations(),
  ]);

  if (!restaurants || restaurants.length === 0) return null;

  
  const counts = new Map();
  for (const r of restaurants) {
    const id = String(r._id); 
    counts.set(id, 0);
  }

 
  for (const res of reservations) {
    if (!res.restaurant) continue;

    
    const restDocOrId = res.restaurant;
    const rid =
      typeof restDocOrId === "object"
        ? String(restDocOrId._id)
        : String(restDocOrId);

    if (counts.has(rid)) {
      counts.set(rid, counts.get(rid) + 1);
    }
  }


  let winner = restaurants[0];
  let winnerId = String(winner._id);
  let minCount = counts.get(winnerId) ?? 0;

  for (const r of restaurants) {
    const id = String(r._id);
    const c = counts.get(id) ?? 0;
    if (c < minCount) {
      minCount = c;
      winner = r;
      winnerId = id;
    }
  }

  
  const plain =
    typeof winner.toObject === "function" ? winner.toObject() : winner;

  return {
    ...plain,
    reservationCount: minCount, 
  };

};

export default {
  postRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
  getLeastBookedRestaurant, 
};