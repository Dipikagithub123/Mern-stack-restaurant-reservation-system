import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRouter from "./routes/reservationRoute.js";
import { errorMiddleware } from "./error/error.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL, // no need for array if single origin
  methods: ["POST", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Enable preflight for all routes
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
