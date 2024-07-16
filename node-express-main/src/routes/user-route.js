import { Router } from "express";
import { getAllUser, loginAccount, registerAccount } from "../controllers/user-controller.js";

const router = Router();

router.get("/get-all", getAllUser);
router.post("/register", registerAccount);
router.post("/login", loginAccount);

export default router;
