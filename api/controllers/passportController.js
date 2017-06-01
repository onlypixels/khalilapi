'use strict';

var mongoose = require('mongoose'),
  Passport = mongoose.model('Passport');

var callCount = 0;

var passportData = [
{
  cCode: "au",
  cName: "Austria",
  valid: 20190404,
  expired: false
},
{
  cCode: "en",
  cName: "England",
  valid: 20150208,
  expired: true
},
{
  cCode: "lb",
  cName: "Lebanon",
  valid: 20170804,
  expired: true
}
];

exports.get_passports = function(req, res) {
  Passport.find({}, function(err, passports) {
    if (err){
      res.send(err);
    }

    console.log("Passports found: " + passports)
 
    var thisData = passportData[callCount % 3];
    var newPassport = new Passport();
    newPassport.country_code = thisData.cCode;
    newPassport.countryName = thisData.cName;
    newPassport.VAlidUntil = thisData.valid
    newPassport.IsNotUnUnExpired = thisData.expired ? 0 : 1;

    if(callCount % 3 == 2){
      newPassport.IsNotUnUnExpired = -1;
    }


    newPassport.save(function(err, stress) {
        if (err){
          res.send(err);
        }
      });

    callCount++;

    Passport.find(function(err, pports){
      res.json(pports);
    });
  });
};

exports.reset_passports = function(req, res) {
  Passport.remove({}, function(err, stress) {
    if (err){
      res.send(err);
    }
  });
  res.json([]);
};