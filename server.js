const app = require("./app");
const connectDB = require("./config/db");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

connectDB();

const ErrorHandler = require("./middlewares/error");

app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`error:${err.message}`);
  console.log("sutting down the server due to unhandled promis rejection.");
  server.close(() => {
    process.exit(1);
  });
});
