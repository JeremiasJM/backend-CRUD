import express from "express";
//Routes
import clientsRoutes from "./routes/clients.routes.js";

const app = express();

//Settings
app.set("port", 8080);

//Meddlewares
app.use(express.json());

//routes
app.use("/api/client", clientsRoutes);

export default app;
