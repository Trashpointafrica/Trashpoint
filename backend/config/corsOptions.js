const whitelist = [
	"https://www.yourwebsite.com",
	"http://127.0.0.1:9000",
	"http://localhost:9000",
];

const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	optionsSuccessStatus: 200,
};

export default corsOptions;
