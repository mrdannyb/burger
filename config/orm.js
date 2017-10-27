var connection = require('./connection.js');

var orm = {
  all: function (cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, records) {
      if (err) throw err;
      cb(records);
    })
  },
  updateOne: function (id, cb) {
    var queryString = "UPDATE burgers SET devoured = TRUE WHERE id = ?";
    connection.query(queryString, [id], function (err, records) {
      if (err) throw err;
      cb(records);
    })
  },
  insertOne: function (burgName, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,TRUE)";
    connection.query(queryString, [burgName],function (err,records) {
      if (err) throw err;
      cb(records);
    })
  },
  delete: function (id, cb) {
    var queryString = "DELETE FROM burgers WHERE id = ?";
    connection.query(queryString, [id], function (err,records) {
      if (err) throw err;
      cb(records);
    })
  }
}

module.exports = orm;
