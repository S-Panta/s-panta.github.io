## PostGresql commands
Use postgresql
- psql -U `your_username` -d `your_database`
- \du : for viewing all roles (users and groups)
- \l : to see all databases
- drop database `databasename`
- SELECT usename FROM pg_user: to view all users in postgresql. usename is the column that has listed the username of user.
- pg_user and pg_shadow stores information about user but pg_shadow is restricted as the password field is visible there.
- The system catalogs are the place where a relational database management
  system stores schema metadata, such as information about tables and columns,
  and internal bookkeeping information. For example:CREATE DATABASE inserts a row into the pg_database catalog — and
  actually creates the database on disk.
- CREATE USER `username` WITh PASSWORD `password` : to create a new user.Note the password should be in single '' not "".
- drop user `username`: to delete user.
- alter user `username` with encrypted password 'password': if password isnot given initially while creating user
- CREATE DATABASE `databasename` WITH OWNER `username`;username should be existed beforehand.
- alter database `databasename` owner to `username`