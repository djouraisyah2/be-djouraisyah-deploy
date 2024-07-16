import { Router } from "express";
import { addSales, getSalesByIdIUser } from "../controllers/sale-controller.js";

const router = Router();

router.post("/add-sales", addSales);
router.get("/get-sales/:id", getSalesByIdIUser);

export default router;
