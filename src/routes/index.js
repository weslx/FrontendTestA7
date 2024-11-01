import { Router } from "express";
import ItemController from "../controllers/itemController.js";

const router = Router();
const itemController = new ItemController();

router.get("/", (req, res) => itemController.renderIndex(req, res));
router.get("/items", (req, res) => itemController.fetchItems(req, res));

export default router;
