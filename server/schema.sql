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
  id int not null, message text not null, usernames text not null, primary key(id)
);
insert into messages values (1, 'Hello all!', 'strider');

-- CREATE TABLE rooms (
--   id integer primary key, rooms text not null
-- );






/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- CREATE TABLE messages (
--   /* Describe your table here.*/
--   id int not null, message text not null, users integer, primary key(id), foreign key(users) references users(id)
-- );
