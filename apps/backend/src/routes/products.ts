import { Router } from "express";
import { handleGetProductById, handleGetProducts } from "../controllers/products.controller";

const router = Router();

router.get("/", handleGetProducts);
router.get("/:id", handleGetProductById);

export default router;