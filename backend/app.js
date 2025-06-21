import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import reservationRouter from "./routes/reservationRoute.js";
import { errorMiddleware } from "./error/error.js";
import { dbConnection } from "./database/dbConnection.js";

dotenv.config({ path: "./config/config.env" });

const app = express();


// --- START OF CORS DEBUGGING ---
const frontendURL = process.env.FRONTEND_URL;
console.log("===================================");
console.log(`CORS DEBUG: FRONTEND_URL from env is: ${frontendURL}`);
console.log("===================================");

const corsOptions = {
  // For debugging, temporarily allow all origins.
  // The real origin should be: frontendURL
  origin: "*", 
  methods: ["POST", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// --- END OF CORS DEBUGGING ---


// Enable preflight for all routes
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running (DEBUG MODE ACTIVE).",
  });
});

dbConnection();

app.use(errorMiddleware);

export default app;
