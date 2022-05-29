const mongoose = require("mongoose");
const { Schema } = mongoose;

const universitySchema = new Schema(
  {
    uname: {
      type: String,
      required: true,
      unique: true,
      maxlength: 250,
    },
    address: {
        type: String,
        required: true,
        maxlength: 250,
    },
    ranknum: {
        type: Number,
        required: true,
    },
  },
  { timestamps: true }
);

const University = mongoose.model('university', universitySchema);

module.exports = University;
