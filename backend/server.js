const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const port = process.env.PORT || 5000;
const goalRoute = require("./routes/goalRoutes");
const userRoute = require("./routes/userRoutes");

connectDb();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoute);
app.use("/api/users", userRoute);

app.use(errorHandler);

app.listen(port, () => console.log("Server started on port", port));
