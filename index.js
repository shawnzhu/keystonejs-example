var keystone = require("keystone"),
  engines = require("consolidate");

keystone.init({
  "name": "KeystoneJS example",
  
  "less": "public",
  "static": "public",
  
  "views": "templates/views",
  "custom engine": engines.mustache,
  "view engine": "mustache",
  
  "auto update": true,
  "mongo": process.env.EXAMPLE_MONGODB_URL || "mongodb://localhost/keystonejs-example",
  
  "session": true,
  "auth": true,
  "user model": "User",
  "cookie secret": "notasecret"
});

require("./models");

keystone.set("routes", require("./routes"));
 
keystone.start();