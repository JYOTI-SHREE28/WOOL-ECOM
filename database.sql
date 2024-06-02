create database wool;
use wool;
create table logindata(
fullname varchar(50),
email varchar(50),
address varchar(50),
city varchar(50),
state varchar(50),
cardname varchar(50),
cardnumber varchar(50),
expmonth varchar(50),
expyear varchar(50)

);
create table signup(
username varchar(50),
email varchar(50),
password varchar(50)
);
create table login(
loginname varchar(50),
loginpassword varchar(50)
);
select * from signup;
select * from login;