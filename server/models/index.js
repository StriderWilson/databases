var db = require('../db');

let placeholder = 'something';

module.exports = {
  messages: {
    get: function () {
      db.connection.query('select * from messages', (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('stringed data', data[0].message);
          console.log('Our message data:', data);
          placeholder = data[0].message;
        }
      });
      return placeholder;
    }, // a function which produces all the messages

    post: function (messageObject) {
      // somehow get the big object and parse out the pieces we want to populate the command below
      let example = {
        username: 'Valjean',
        message: 'In mercys name, three days is all I need.',
        roomname: 'Hello'
      };
      db.connection.query(`insert into messages (message, usernames) values ( '${messageObject.username}', '${messageObject.username}');`, (err, data) => {
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
      db.connection.query('select * from users', (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('Our users data:', data);
        }
      });
    },
    post: function () {
      db.connection.query("insert into users (users) values ('Strider');", (err, data) => {
        if (err) {
          throw err;
        } else {
          console.log('Our posted message data:', data);
        }
      });
    }
  }
};
// module.exports.messages.post();
// module.exports.users.post();
// module.exports.messages.get();
// module.exports.users.get();

// db.connection.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Connection success!!');
//   }
// });
// db.connection.end((err) => {
//   if (err) {
//     throw err;
//   }
// });