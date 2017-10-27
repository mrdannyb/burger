var orm = require('../config/orm.js')

var burger = {
  all: function (cb) {
    orm.all(function (res) {
      console.log(res);
      cb(res);
    })
  },
  create: function (name, cb) {
    orm.insertOne(name, function (res) {
      console.log(res);
      cb(res);
    });
  },
  update: function (id, cb) {
    orm.updateOne(id, function (res) {
      console.log(res);
      cb(res);
    })
  },
  delete: function (id, cb) {
    orm.delete(id, function (res) {
      console.log(res);
      cb(res);
    })
  }
}

module.exports = burger;
