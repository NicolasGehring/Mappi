import mongoose, { Schema } from "mongoose";

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  long: {
    type: Number,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
});

const Location = mongoose.model("Location", locationSchema);
export default Location;
