var connection = require('./connection.js');

var orm = {
  all: function (cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, data) {
      if (err) throw err;
      cb(data);
    })
  },
  updateOne: function (id) {
    var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
    connection.query(queryString, [id], function (err, data) {
      if (err) throw err;
            
    })
  },
  insertOne: function (burgName, dateAdded) {
    var queryString = "INSERT INTO burgers (burger_name, devoured, date) VALUES (?,TRUE,?)";
    connection.query(queryString, [burgName,dateAdded],function (err,data) {
      if (err) throw err;

    })
  }
}
