import { Router } from "express";
import booksControllers from "../controllers/booksControllers.js";

const router = Router();

router.get("/", booksControllers.wishList);
router.post("/newbook", booksControllers.newBook);
router.put("/bookupdate", booksControllers.putBook);
router.delete("/deletebook", booksControllers.deleteBook);

export default router;