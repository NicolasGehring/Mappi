import {
  createNewLocation,
  getLocationsAtPosition,
} from "../Services/locationServices";

//TODO: Look up how effective updates work in MONGO DB
//https://stackoverflow.com/questions/24693458/how-to-find-a-sub-document-using-mongoose
export default {
  Query: {
    location: async (obj, { long, lat }, context, info) => {
      return await getLocationsAtPosition(long, lat);
    },
  },
  Mutation: {
    createLocation: async (parent, { name, long, lat }, { models, secret }) => {
      return await createNewLocation(name, long, lat);
    },

    deleteLocation: async (
      parent,
      { username, email, password },
      { models, secret }
    ) => {
      const user = await models.User.create({
        username,
        email,
        password,
      });

      return { token: createToken(user, secret, "30m") };
    },

    deleteLocation: async (
      parent,
      { login, password },
      { models, secret }
    ) => {},
  },
};
