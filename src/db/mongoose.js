import mongoose from "mongoose";

// Use the MONGODB_URI from .env (or fall back to local)
const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
// Database name to use/create
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
