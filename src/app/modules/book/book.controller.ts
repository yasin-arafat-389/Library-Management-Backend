import { RequestHandler } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { bookService } from "./book.service";

const createBook: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookService.createBook(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks: RequestHandler = catchAsync(async (req, res) => {
  const result = await bookService.getAllBooks();

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
};
