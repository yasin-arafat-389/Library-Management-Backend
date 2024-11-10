import express from "express";
import { BookController } from "./borrowBook.controller";

const router = express.Router();

router.post("/borrow", BookController.borrowBook);

router.post("/return", BookController.returnBook);

export const BorrowBookRoutes = router;
