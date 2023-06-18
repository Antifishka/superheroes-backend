const mongoose = require("mongoose");
const app = require("./app");
require('dotenv').config();

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch((err) => {
    console.log(`Failed to launch application with error: ${err.message}`);
    process.exit(1);
  });