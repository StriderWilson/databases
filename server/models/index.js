var db = require('../db');

let messagePrimaryKeyIndex = 14;

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
          console.log('stringed data', data[0].message);
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
      // somehow get the big object and parse out the pieces we want to populate the command below
      let messageObject = {
        username: 'Valjean',
        message: 'In mercys name, three days is all I need.',
        roomname: 'Hello'
      };
      //console.log(${messageObject.username});

      db.connection.query(`insert into messages values (${messagePrimaryKeyIndex}, '${messageObject.message}', '${messageObject.username}');`, (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('Our posted message data:', data);
          messagePrimaryKeyIndex++;
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
    post: function () {
      db.connection.query("insert into users values (12, 'Strider');", (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('Our posted message data:', data);
        }
      });
    }
  }
};
module.exports.messages.post();
module.exports.users.post();
module.exports.messages.get();
module.exports.users.get();

