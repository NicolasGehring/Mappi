import mongoose from "mongoose";

const connectDb = () => {
  const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;

  const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

  const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000
  };
  if (process.env.NODE_ENV === "develop") {
    console.log("---- Trying to connect to DB ----");
    console.log(url);
    mongoose
      .connect(url, options)
      .then(function() {
        console.log("---- MongoDB is connected ----");
      })
      .catch(function(err) {
        console.log("DATABASE CONNECTION NOT SUCCESFUL", err);
      });
  } else {
    console.log("We are not in develop");
  }
};

export { connectDb };
