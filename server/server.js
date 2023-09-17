import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan"; // used when we want to get url and details hitted on the app
import cors from "cors";
import connectDB from "./config/db.js";
import { default as routes } from "./routes/index.js";
const app = express();

//confgure env
dotenv.config();
const corsOptions = {
  origin: 'https://ecommerce-xd6d.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
//database connection
connectDB();
//body-parser is inherited in express now
//middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// const db = require('./config/mongoose');
app.use("/", routes);
const port = 8080;
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`.bgRed.yellow);
  }

  console.log(`Server is running on port: ${port}`.bgCyan.black);
});
