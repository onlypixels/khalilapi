'use strict';

var mongoose = require('mongoose'),
  Stress = mongoose.model('Stress');

function getStressMessage( stressLevel ){

    switch (stressLevel) {
      case 0:
        return 'I never get stressed. When you\'re brought up in a warzone - if it doesn\'t explode it doesn\'t stress you out';
        break;
      case 10:
        return 'I\'m a bit hot under the collar';
        break;
      default:
        return 'My brain is going to explode!';  
    }
    return '';
    
}

exports.get_stress_level = function(req, res) {
  Stress.findOneAndUpdate({}, {}, {new: false}, function(err, stress) {
    if (err)
      //res.send("Yo!");
      res.send(err);
    //var new_stress

    res.json(stress);

    stress.stressLevel += 10;
    stress.message = getStressMessage( stress.stressLevel )



    stress.save(function(err, stress) {
        if (err)
          res.send(err);
        
      });

    
  });
};




exports.reset_stress_level = function(req, res) {
  Stress.remove({}, function(err, stress) {
    if (err)
      res.send(err);
  });

  var stress = new Stress();
  stress.stressLevel = 0;
  stress.message = getStressMessage( 0 )

  stress.save(function(err, stress) {
    if (err)
      res.send(err);
    res.json(stress);
  });
};
