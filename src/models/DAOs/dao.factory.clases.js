//import ProductsModelClases from "./Products.model.clases.js";

import RestaurantsMongoClases from "../DAOs/restaurant.dao.js";

class RestaurantFactory {
    static create(type) {
        switch (type) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor.");
                return new ProductsModelClases();
            case "MONGO":
                console.log("Persistiendo en MongoDB.");
                return new RestaurantsMongoClases();
            default:
                console.log("Persistiendo en la memoria default.");
                return new ProductsModelClases();
        }
    }
}

export default RestaurantFactory;