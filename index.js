import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRouter from "./routes/users.js";

import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "users API",
			version: "1.0.0",
			description: "A simple Express users API",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
//*para verlo, entramos a http://www.localhost:8000/api-docs/

//middlewares
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("home");
});

//routes middleware:
app.use("/users", usersRouter);

//DB connection:
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("conectado a mongo atlas")
);

app.listen(PORT, () =>
  console.log(`server running on http://www.localhost:${PORT}`)
);
