import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBook = async (data: Book) => {
  const newBook = await prisma.book.create({
    data: {
      title: data.title,
      genre: data.genre,
      publishedYear: data.publishedYear,
      totalCopies: data.totalCopies,
      availableCopies: data.availableCopies,
    },
  });

  return newBook;
};

const getAllBooks = async () => {
  const books = await prisma.book.findMany();
  return books;
};

export const bookService = {
  createBook,
  getAllBooks,
};
