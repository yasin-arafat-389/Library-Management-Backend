import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const borrowBook = async (bookId: string, memberId: string) => {
  return await prisma.$transaction(async (prisma) => {
    const book = await prisma.book.findUnique({
      where: { bookId },
    });

    if (!book) {
      throw new Error("Book not found");
    }

    if (book.availableCopies <= 0) {
      throw new Error("No available copies for borrowing");
    }

    await prisma.book.update({
      where: { bookId },
      data: { availableCopies: { decrement: 1 } },
    });

    const borrowRecord = await prisma.borrowRecord.create({
      data: {
        bookId,
        memberId,
        borrowDate: new Date(),
      },
      select: {
        borrowId: true,
        bookId: true,
        memberId: true,
        borrowDate: true,
      },
    });

    return borrowRecord;
  });
};

export const BorrowBookService = {
  borrowBook,
};
