var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      // db.connection.connect((err) => {
      //   if (err) {
      //     throw err;
      //   } else {
      //     console.log('Connection success!!');
      //   }
      // });
      db.connection.query('select * from messages', (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('Our message data:', data);
        }
      });
      // db.connection.end((err) => {
      //   if (err) {
      //     throw err;
      //   }
      // });
    }, // a function which produces all the messages
    post: function () {
      db.connection.query("insert into messages values (2, 'Hello all world!', '2019-11-13 13:00:00', 1);", (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('Our posted message data:', data);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      // db.connection.connect((err) => {
      //   if (err) {
      //     throw err;
      //   } else {
      //     console.log('Connection success!!');
      //   }
      // });
      db.connection.query('select * from users', (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('Our users data:', data);
        }
      });
      // db.connection.end((err) => {
      //   if (err) {
      //     throw err;
      //   }
      // });
    },
    post: function () { }
  }
};
module.exports.messages.post();
module.exports.messages.get();
module.exports.users.get();

