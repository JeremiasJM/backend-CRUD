import { Router } from "express";
import {clientsController} from "../controllers/clients.controllers.js"

const router= Router();

router.get("/", clientsController.getClients);
router.get("/:id", clientsController.getClient);
router.post("/", clientsController.addClient);
router.put("/:id", clientsController.updateClient);
router.delete("/:id", clientsController.deleteClient);
export default router;