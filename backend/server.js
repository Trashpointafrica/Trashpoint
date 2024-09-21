import express from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";

//Import our MongoDB connection function
import connectDB from "./config/connectDB.js";

//All API routes are imported in this section
import userRoutes from "./routes/userRoutes.js";

//Variables for services
const port = 9000;
const mongo_url =
	"mongodb+srv://gimmeadmin:gimme1122@trashpoint.lretk.mongodb.net/TrashpointDB?retryWrites=true&w=majority&appName=Trashpoint";

const app = express();
// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// Express built-in middleware for json
app.use(express.json());

//API homepage
app.get("/", (req, res) =>
	res.send("This is a RESTFUL API server for trashpoint backend")
);

//User Routes
app.use("/users", userRoutes);

const startServer = () => {
	try {
		//connectDB(mongo_url);
		app.listen(port, () =>
			console.log(`Server is running on port:  http://localhost:${port}`)
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();
