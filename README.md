
# UserProducts-Fullstack

This application is built using ExpressJS as the Backend and NextJS as the Frontend.

## Technologies Used

### Frontend
- Typescript
- Redux Toolkit
- Redux Persist
- TailwindCSS
- axios
- react-hook-form

### Backend
- Typescript
- MongoDB
- mongoose
- jsonwebtoken (jwt)
- bcrypt
- cors

## Installation Instructions

First, clone this repository.

### Server Setup
1. Navigate to the server directory:
    ```bash
    cd server
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file based on the `.env.example` file and fill in the following variables:
    ```
    MONGO_URI= [your MongoDB connection string]
    JWT_SECRET= [your secret key for JWT]
    CLIENT_URL= [your client URL, usually http://localhost:3000]
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```


### Client Setup
1. Navigate to the client directory:
    ```bash
    cd client
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file based on the `.env.example` file and fill in the following variable:
    ```
    NEXT_PUBLIC_API_URL= [your server URL, usually http://localhost:5000]
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```


## API Endpoints

### Auth Routes
- `POST /api/auth/login`: Login with email and password.
- `GET /api/auth/logout`: Logout.
- `POST /api/auth/register`: Register a new account.

### Product Routes
- `GET /api/products`: Get all product data without login.
- `GET /api/products/:id`: Get product details without login.
- `GET /api/products/user`: Get all products posted by the logged-in user.
- `POST /api/products/add`: Create a new product post (logged-in users only).
- `PUT /api/products/:id`: Update a product (logged-in users only).
- `DELETE /api/products/:id`: Delete a product (logged-in users only).

---

**Author:**
Yaqub M. Wiraatmaja
