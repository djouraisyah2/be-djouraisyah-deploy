import express from "express";
import cors from "cors";
import morgan from "morgan";

import * as middleware from "./utils/middleware.js";
import userRoute from "./routes/user-route.js";
import cartRoute from "./routes/cart-route.js";
import saleRoute from "./routes/sale-route.js";
import { dbConnection } from "./config/db.js";

const app = express();

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

// request logger middleware
app.use(morgan("tiny"));

// healthcheck endpoint
app.get("/", (req, res) => {
  res.status(200).send({ status: "ok" });
});

// API routes
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);
app.use("/api/sale", saleRoute);

// custom middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

// Database connection
dbConnection.authenticate().then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.log('Error connecting to database', err);
  process.exit();
});

export default app;
