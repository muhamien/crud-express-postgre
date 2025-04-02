# Express Layered CRUD API

This project is a simple CRUD (Create, Read, Update, Delete) API built using Express.js and Prisma ORM. It connects to a PostgreSQL database and allows you to manage a list of products.

## Prerequisites

- Node.js and npm installed on your machine.
- PostgreSQL database running.
- Prisma CLI installed globally (`npm install -g prisma`).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd express-layered-crud
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and configure it as shown in `.env.example`. Ensure you provide the correct `DATABASE_URL`.

4. **Start the server:**

   ```bash
   npm start
   ```

   The server will start on the port specified in your `.env` file (default is 2000).

## API Endpoints

- **GET /api**: Returns a simple "Hello World!" message.
- **GET /products**: Retrieves a list of all products.
- **POST /products**: Creates a new product. Requires a JSON body with `name`, `price`, `description`, and `image`.
- **GET /product/:id**: Retrieves a product by its ID.
- **PUT /products/:id**: Updates a product by its ID. Requires a JSON body with updated `name`, `price`, `description`, and `image`.
- **DELETE /products/:id**: Deletes a product by its ID.

## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework.
- **Prisma**: A next-generation ORM for Node.js and TypeScript.
- **PostgreSQL**: A powerful, open-source object-relational database system.

## License

This project is licensed under the ISC License.
