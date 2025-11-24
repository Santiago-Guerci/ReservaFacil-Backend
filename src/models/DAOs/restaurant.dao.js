import mongoose from "../../db/mongoose.js"
import { ObjectId } from "mongodb"

class mongoose {
    constructor() {
        this.collection = "restaurants"
    }
}

getRestaurants = async () => {
    const data = await mongoose.db.collection(this.collection).find().toArray();
    return data;
};

postRestaurants = async (resto) => {
    const data = await mongoose.db.collection(this.collection).insertOne(resto);
    return data;
};

putRestaurants = async (id, resto) => {
    console.log("ID: ", typeof(id), id);
    const idmongo = ObjectId.createFromHexString(id);
    console.log("ID: ", typeof(idmongo), idmongo);
    const data = await mongoose.db.collection(this.collection).replaceOne({ _id: ObjectId.createFromHexString(id) }, resto);
    return data
};

patchRestaurants = async (id, resto) => {
    const data = await mongoose.db.collection(this.collection).updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: resto });
    return data;
};

deleteRestaurants = async (id) => {
    const data = await mongoose.db.collection(this.collection).deleteOne({ _id: ObjectId.createFromHexString(id) });
    return data;
};

export default ProductsMongoClases;