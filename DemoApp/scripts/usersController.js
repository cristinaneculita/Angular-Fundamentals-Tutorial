var fs = require('fs');

module.exports.save = function(req, res){
    var user = req.body;
    fs.writeFileSync('app/data/user/'+req.params.userName+'.json', JSON.stringify(user));
    res.send(user);
};

