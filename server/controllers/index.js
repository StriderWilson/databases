var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      // db will give us an array of objects and then we need to turn from that into a json string so that we can send it back to the client
      let result = JSON.stringify([{
        id: 2,
        message: 'In mercys name, three days is all I need.',
        usernames: 'Valjean' }]);

      res.send("hello"); // in here put the jsonifeid thing
      // res.end();

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req);
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

