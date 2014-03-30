var keystone = require("keystone"),
    User = keystone.list("User");
 
exports = module.exports = function(done) {
    
    new User.model({
        name: { first: "Admin", last: "User" },
        email: "demo@example.com",
        password: "demo",
        canAccessKeystone: true
    }).save(done);
    
};