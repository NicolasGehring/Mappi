import Location from "../db/models/location.model";

export const createNewLocation = async (name, long, lat) => {
  console.log(name, long, lat);
  const newLocation = new Location({
    name: name,
    long: long,
    lat: lat,
  });
  return newLocation.save();
};

export const getLocationsAtPosition = async (long, lat) => {
  const result = await Location.find({ long: long, lat: lat }).exec();
  console.log("res", result);
  return result;
};
