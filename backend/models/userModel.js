const mongoose = require("mongoose");
const { use } = require("../routes/goalRoutes");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add Name"],
    },
    email: {
      type: String,
      required: [true, "Please add Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
