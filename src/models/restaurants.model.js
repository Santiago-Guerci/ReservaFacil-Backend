import Restaurant from "../db/restaurant.schema.js";

const createRestaurant = async (restaurant) => {
    try {
        const newRestaurant = await Restaurant.create(restaurant);
        return newRestaurant;
    } catch (error) {
        throw error;
    }
};

const getRestaurants = async () => {
    try {
        const restaurants = await Restaurant.find({}).sort({ createdAt: -1 });
        return restaurants;
    } catch (error) {
        throw error;
    }
};

const getRestaurantById = async (id) => {
    try {
        const restaurant = await Restaurant.findById(id);
        return restaurant;
    } catch (error) {
        throw error;
    }
};

const updateRestaurant = async (id, updates) => {
    try {
        const options = { new: true, runValidators: true };
        const updated = await Restaurant.findByIdAndUpdate(id, updates, options);
        return updated;
    } catch (error) {
        throw error;
    }
};

const deleteRestaurant = async (id) => {
    try {
        const deleted = await Restaurant.findByIdAndDelete(id);
        return deleted;
    } catch (error) {
        throw error;
    }
};

export default {
    createRestaurant,
    getRestaurants,
    getRestaurantById,
    updateRestaurant,
    deleteRestaurant,
};