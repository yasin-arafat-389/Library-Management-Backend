import { RequestHandler } from "express";
import catchAsync from "../../../utils/catchAsync";
import { BorrowBookService } from "./borrowBook.service";
import sendResponse from "../../../utils/sendResponse";

const borrowBook: RequestHandler = catchAsync(async (req, res) => {
  const result = await BorrowBookService.borrowBook(
    req.body.bookId,
    req.body.memberId
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});

export const BookController = {
  borrowBook,
};
