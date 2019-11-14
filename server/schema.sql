drop database chat;

CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id integer primary key, users text not null
);
insert into users values (1, 'suejung');
CREATE TABLE messages (
  /* Describe your table here.*/
  id int not null, message text not null, created_at datetime not null, users integer, primary key(id), foreign key(users) references users(id)
);
insert into messages values (1, 'Hello all!', '2019-11-13 12:00:00', 1);

CREATE TABLE rooms (
  id integer primary key, rooms text not null
);






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

