const mongoose = require("mongoose");
const { Schema } = mongoose;

const professorSchema = new Schema(
  {
    pname: {
      type: String,
      required: true,
      maxlength: 100,
    },
    plastname: {
        type: String,
        required: true,
        maxlength: 250,
    },
    age: {
        type: Number,
        required: true,
    },
    univid: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

const Professor = mongoose.model('professor', professorSchema);

module.exports = Professor;
