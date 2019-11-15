var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      // db will give us an array of objects and then we need to turn from that into a json string so that we can send it back to the client
      // let result = JSON.stringify([{
      //   id: 2,
      //   message: 'In mercys name, three days is all I need.',
      //   usernames: 'Valjean' }]);

      let result = JSON.stringify(models.messages.get());

      res.header('Access-Control-Allow-Origin', '*');
      res.header('Origin, X-Requested-With, Content-Type, Accept');
      res.send(result); // in here put the jsonifeid thing
      // res.end();

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req);
      models.messages.post(req);

      res.header('Access-Control-Allow-Origin', '*');
      res.header('Origin, X-Requested-With, Content-Type, Accept');
      res.send('success');
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) { }
  }
};

