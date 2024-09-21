
# Trashpoint Backend with MVC Architecture

Our APIs are built using Express.js, organized using the MVC (Model-View-Controller) architecture pattern. It is structured to separate concerns into Models, Views, and Controllers for cleaner and more maintainable code.
Testing is done with Jest and Postman.


## Project Structure

```
.
├── config/            # Configuration files
│   └── connectDB.js    # Database connection setup
│   
├── controllers/       # Controller files for handling business logic
│   └── userController.js
│   
├── models/            # Data models/schemas for interacting with the database
│   └── userModel.js
│   
├── routes/            # Actual API Route definitions
│   └── userRoutes.js
│   
├── utils/             # Utility functions
│   └── logger.js
│   
├── app.js             # Express app configuration
│   
├── server.js          # Entry point to start the server
│   
├── test/          # Contains all unit tests
│   └── user.test.js
│   
└── package.json       # Project dependencies and scripts

```

### Folders:

- **config/**: Contains configuration files like database connection.
- **controllers/**: Handles the business logic of the application. Each controller corresponds to a model.
- **models/**: Represents the data structure for interacting with the database (e.g., for MongoDB.).
- **routes/**: Defines the API routes and binds them to specific controller functions.
- **test/**: Contains all unit tests written with jest.
- **utils/**: Helper functions or utilities used across the app.



### Files:

- **server.js**: Entry point to run the server.
- **package.json**: Lists the project dependencies and scripts for running, testing, or building the project.



## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Fast, unopinionated web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM library for MongoDB for extra layer of security.




## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/Trashpoint.git
    cd Trashpoint
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root of the project and add your database configuration and other environment variables:

    ```env
    PORT=9000
    MONGO = mongodb://[OUR_DB_URL_GOES_HERE]
    ```

4.1 Start dev server:

    ```bash
    npm run dev
    ```
4.2 Start the server:

```bash
npm start
```

    The server should now be running on `http://localhost:9000`.

## Scripts

- `npm start`: Starts the production server.
- `npm run dev`: Starts the server with Nodemon for development.



## Routes

All routes are defined in the `routes/` directory. Each route is linked to a specific controller.

For example, `userRoutes.js`:

```javascript
import express from 'express';
const router = express.Router();
import { getAllUsers, createUser } from '../controllers/userController');

// User routes
router.get('/users', getAllUsers);
router.post('/users', createUser);

module.exports = router;
```

## Models

Models define the structure of the data stored in the database.

For example, `userModel.js` using Mongoose:

```javascript
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export const User =  mongoose.models.User || mongoose.model('User', userSchema);
```



## Controllers

Controllers handle the business logic for a particular route. They interact with the models and return the appropriate response.

For example, `userController.js`:

```javascript
import { User } from '../models/userModel';

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

```


## Environment Variables

This project uses environment variables for configuration. Refer to the `.env` file for configurations:

- `PORT`: The port number the app will run on.
- `DB_URI`: Connection string for our MongoDB.
