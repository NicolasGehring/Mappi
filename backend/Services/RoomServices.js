import Room from "../db/models/room.model";

export const createNewRoom = name => {
  const newRoom = new Room({ name: name, started: false });
  newRoom.save((err, prod) => {
    console.log({ err, prod });
    return prod._id;
  });
};

export const deleteRoomByName = name => {
  const room = Room.find({ name: name });
  room.remove((err, prod) => {
    console.log({ err, prod });
  });
};
