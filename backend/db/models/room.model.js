import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  started: {
    type: Boolean
  }
});

const Room = mongoose.model("Room", roomSchema);
export default Room;
