
/*
 * GET home page.
 */

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("db.sqlite3");

exports.index = function(req, res){
  db.all("select name, message from bbs_data order by id desc", function(err, rows){
    if(!err){
      res.render('index', {
        title: 'BBS',
	data: rows
      });
    }
    else{
      console.log(err);
    }
  });
};

exports.reg = function(req, res){
  var name = req.body.name;
  var message = req.body.message;
  db.run("insert into bbs_data (name, message) values (?, ?)", name, message);

  res.redirect("/", 301);
}
