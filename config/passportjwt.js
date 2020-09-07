const passport=require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Doc=require('../models/doctor');
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'HospitalApi';
passport.use(new JwtStrategy(opts, function(jwtpayload, done) {
    Doc.findById(jwtpayload._id, function(err, doc) {
        if (err) {
            return done(err, false);
        }
        if (doc) {
            return done(null, doc);
        } else {
            return done(null, false);
        }
    });
}));
passport.serializeUser(function (doctor, done) {
    done(null, doctor);
  });
  //deserialize the user from the key in the cookie
  passport.deserializeUser(function (id, done) {
    Doctor.findById(id, function (error, doctor) {
      if (error) {
        return done(error);
      }
      return done(null, doctor);
    });
  });
  
  // check user authentication
  passport.checkAuthentication = function (req, res, next) {
    if (req.isAuthenticated()){
      return next();
    }
    return res.json(401,{
      message:"Unautherized"
    });
  };
  // set authentication
  passport.setAuthenticatedUser = function (req, res, next) {
    if (req.isAuthenticated()) {
      res.locals.doctor = req.doctor;
    }
    next();
  };
  
  module.exports = passport;