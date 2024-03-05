# Shopping Application Backend

This is the backend for the Shopping Application, built using Node.js, Express.js, and MongoDB Atlas. The backend provides APIs to manage products, users, orders, and other functionalities required for the shopping application.

## Features

- **Product Management:** Create, read, update, and delete products.
- **User Authentication:** Register users, login, and manage user sessions.
- **Order Management:** Place orders, view order history, and track order status.
- **Data Persistence:** Data is stored in MongoDB Atlas, ensuring scalability and reliability.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose (ODM for MongoDB)
- CORS (Cross-Origin Resource Sharing) for handling cross-origin requests

##Link
- **<a href="https://shopping-backend-neon.vercel.app/">CLICK-HERE</a>**
  
## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your_username/shopping-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd shopping-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up MongoDB Atlas:

   - Create a MongoDB Atlas cluster.
   - Obtain the connection URI.
   - Add `'YOUR_MONGODB_ATLAS_URI'` create `.env` and following type to paste `DATA_BASE='YOUR_MONGODB_ATLAS_URI'` .

   **Note:** You want use my backend project to create MongoDB Atlas database connection. I've hidden the database URL. If you need anything, please feel free to contact me.

5. Start the server:

    ```bash
    node index.js
    ```

6. The backend server will be running at `http://localhost:5000`.

## Contribution

Contributions are welcome! If you'd like to contribute to this project, feel free to submit pull requests or open issues for any improvements or features you'd like to see added.

