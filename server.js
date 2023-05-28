const mongoose = require("mongoose");
const app = require("./app");
require('dotenv').config();

const { DB_HOST, PORT = 3000 } = process.env;
console.log(DB_HOST, "DB_HOST");

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Database connection successful. API is on port: ${PORT}`)
    )
  )
  .catch((err) => {
    console.log(`Failed to launch application with error: ${err.message}`);
    process.exit(1);
  });