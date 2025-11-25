import mongoose from "mongoose";
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGODB_DB || "restaurantsDB";

mongoose.set("strictQuery", false);

mongoose
  .connect(mongoURI, {
    dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB (db=${dbName})`);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

export default mongoose;
