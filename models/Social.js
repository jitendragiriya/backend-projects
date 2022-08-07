const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    special: {
      type: String,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("social", socialSchema);
