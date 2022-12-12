const express = require("express");
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();
require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
