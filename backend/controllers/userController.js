import connectDB from "../config/connectDB.js"

let users = [
    {
        "id": 1,
        "firstname": "Dave",
        "lastname": "Gray",
        "position": "Finance Manager"
    },
    {
        "id": 2,
        "firstname": "John",
        "lastname": "Smith",
        "position": "Brand Ambassador"
    }
];




//Fetches all the users in DB
export const getAllUsers = (req, res) => {
    res.send(users);
}

//Creates new users in DB
export const createNewUser = (req, res) => {
    //add user to database

    res.send("User created successfully")
}

//Check for connection
export const testDBConnect = async (req, res) => {
    try {
        await connectDB();
        res.send("datbase connected successfully");
    } catch (error) {
        res.send(error);
    }

}



