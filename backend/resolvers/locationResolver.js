export default {
  Query: {
    location: async (obj, args, context, info) => {
      return { text: "IT worked", description: "What up?" };
      /*       console.log(context);
      return await context.models.User.findById(args.id);
 */
    }
  }
  /* 
  Mutation: {
    createLocation: async (
      parent,
      { username, email, password },
      { models, secret }
    ) => {
      const user = await models.User.create({
        username,
        email,
        password
      });

      return { token: createToken(user, secret, "30m") };
    },

    deleteLocation: async (
      parent,
      { username, email, password },
      { models, secret }
    ) => {
      const user = await models.User.create({
        username,
        email,
        password
      });

      return { token: createToken(user, secret, "30m") };
    },

    deleteLocation: async (
      parent,
      { login, password },
      { models, secret }
    
    ) => {} }*/
};
