import express from "express";
import cors from "cors";
//Routes
import clientsRoutes from "./routes/clients.routes.js";

const app = express();

//Settings
app.set("port", 8080);

//Meddlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/client", clientsRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
