// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const morgan = require("morgan");
const cors = require("cors");
const CheeseRouter = require("./controllers/cheese");

// APP
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/cheese", CheeseRouter);

//Test
app.get("/", (req, res) => {
  res.send("Hello World");
});

// LISTENER
app.listen(PORT, () => console.log(`now serving some ${PORT}`));
