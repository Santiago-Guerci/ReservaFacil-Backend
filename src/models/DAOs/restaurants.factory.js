import RestaurantsMem from "../restaurants.mem.js";
import RestaurantsMongo from "../restaurants.model.js";

class RestaurantFactory {
    static create(type) {
        switch (type) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor.");
                return RestaurantsMem;
            case "MONGO":
                console.log("Persistiendo en MongoDB.");
                return RestaurantsMongo;
        }
    }
}

export default RestaurantFactory;