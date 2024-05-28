import express, { Application } from "express";
import cors from "cors";

import connectDB from "./utils/db";
import authRoutes from "./routes/auth";
import productRoutes from "./routes/products";

const app: Application = express();

// cors
app.use(
  cors({
    origin: process.env.CLIENT_URL as string,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB().then(() => {
  console.log("connected to database");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Local development server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server ready on port ${port}.`);
});
