import express from "express";
import dotenv from "dotenv";
import router from "./router";
import { connectDB } from "./config/db";

const app = express();
dotenv.config();
connectDB();

// Leer datos de formularios
app.use(express.json());

// Rutas de API
app.use("/api/auth/v1/", router);

export default app;
