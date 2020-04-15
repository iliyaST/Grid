const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    port: process.env.PORT || 3002,
    dbURL: "mongodb://localhost:27017",
  },
  production: {},
};

module.exports = config[env];
