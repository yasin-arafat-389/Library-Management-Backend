import express from "express";
import { BookController } from "./borrowBook.controller";

const router = express.Router();

router.post("/", BookController.borrowBook);

export const BorrowBookRoutes = router;
