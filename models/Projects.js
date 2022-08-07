const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tech: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("project", projectSchema);
