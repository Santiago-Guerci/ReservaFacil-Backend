import "dotenv/config";
import express from "express";
import cors from "cors";
import "./src/db/mongoose.js";
import restaurantsRouter from "./src/routes/restaurants.route.js";
import usersRouter from "./src/routes/users.route.js";
import reservationsRouter from "./src/routes/reservations.route.js";
import authRouter from "./src/routes/auth.route.js";
import reportsRouter from "./src/routes/reports.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(
  cors({
    origin: "*", // change this to your local app URL (e.g., React dev server)
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/restaurants", restaurantsRouter);
app.use("/users", usersRouter);
app.use("/reservations", reservationsRouter);
app.use("/auth", authRouter);
app.use("/reports", reportsRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
