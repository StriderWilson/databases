var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});
connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connection success!!');
  }
});

connection.query('select * from messages', (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log('Our data:', data);
  }
});

connection.end((err) => {
  if (err) {
    throw err;
  }
});



// mysql --host=localhost --user=root --password='plantlife' < /Users/student/code/hrsf124-databases/server/schema.sql
