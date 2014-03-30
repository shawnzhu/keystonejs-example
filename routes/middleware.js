var _ = require("underscore"),
    keystone = require("keystone");
 
/**
    Initialises the standard view locals.
    Include anything that should be initialised before route controllers are executed.
*/
exports.initLocals = function(req, res, next) {
    
    var locals = res.locals;
    
    locals.user = req.user;
    
    // Add your own local variables here
    
    next();
    
};
 
exports.initErrorHandlers = function(req, res, next) {
    
    res.err = function(err, title, message) {
        res.status(500).render("errors/500", {
            err: err,
            errorTitle: title,
            errorMsg: message
        });
    }
    
    res.notfound = function(title, message) {
        res.status(404).render("errors/404", {
            errorTitle: title,
            errorMsg: message
        });
    }
    
    next();
    
};
 
exports.flashMessages = function(req, res, next) {
    
    var flashMessages = {
        info: req.flash("info"),
        success: req.flash("success"),
        warning: req.flash("warning"),
        error: req.flash("error")
    };
    
    res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length }) ? flashMessages : false;
    
    next();
    
};