# Library Management System (Backend)

## Project Overview

This is a simple backend application for library management system that allows library staff and members to manage books, memberships, and borrowing activities. The API will be structured around CRUD operations for books, members, and borrow records, with additional endpoints for borrowing and returning books. UUID was used for unique identification in all tables.

## Features

- **Book Management**
- **Member Management**
- **Borrow & Return System**
- **Overdue Book Tracking**

## Technology Stack

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma

## Setting Up and Using the Application

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yasin-arafat-389/Library-Management-Backend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```
   DATABASE_URL= your_database_url
   PORT= specify_a_port
   ```

4. **Run the application**:
   ```sh
   npm run dev
   ```

### Usage

Once the server is running, you can use the following endpoints:

### API Endpoints

1. **Create book**

   - **Route**: `POST /api/books`

2. **Read all book**

   - **Route**: `GET /api/books`

3. **Read Book by ID**

   - **Route**: `GET /api/books/:bookId`

4. **Update book**

   - **Route**: `PUT /api/books/:bookId`

5. **Delete book**

   - **Route**: `DELETE /api/books/:bookId`

6. **Create member**

   - **Route**: `POST /api/members`

7. **Read all members**

   - **Route**: `GET /api/members`

8. **Read members by ID**

   - **Route**: `GET /api/members/:memberId`

9. **Update member**

   - **Route**: `PUT /api/members/:memberId`

10. **Delete member**

    - **Route**: `DELETE /api/members/:memberId`

11. **Borrow a book**

    - **Route**: `POST /api/borrow`

12. **Return a book**

    - **Route**: `POST /api/return`

13. **Overdue Borrow List**
    - **Route**: `GET /api/borrow/overdue`
