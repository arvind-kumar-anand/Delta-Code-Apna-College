-- 08. Our First Table
-- CREATE DATABASE College;
-- USE college;
-- CREATE TABLE student (
--     name VARCHAR(30),
--     age INT,
--     roll_No INT
-- );
-- INSERT INTO student values
-- ("arvind",23,1234),
-- ("kitty",23,5678),
-- ("raghu",28,7890);
-- SELECT * from student;


-- 09. Database Queries
-- CREATE DATABASE College;
-- create database if not exists college;
-- drop database if exists college;
-- create database if not exists instagram;
-- show databases;
-- use instagram;
-- use college;
-- show tables;



-- 10. CREATE Table
-- CREATE DATABASE College;
-- use college;
-- show tables;
-- CREATE TABLE student (
--    id INT,
--    Name VARCHAR(30),
--    Email VARCHAR(50),
--    Followers INT,
--    Following INT
-- );


-- 11. What are Constraints_
-- 12. Key Constraints

CREATE DATABASE instagram;
use instagram;
CREATE TABLE usersOfInsta (
-- id INT PRIMARY KEY,
	id INT,
    age INT,
    Name VARCHAR(30) NOT NULL,
    Email VARCHAR(50) UNIQUE,
    Followers INT DEFAULT 0,
    Following INT DEFAULT 0,
   -- CONSTRAINT CHECK (age >= 13) OR
    CONSTRAINT age_check CHECK (age >= 13),
    PRIMARY KEY (id)
);
-- 13. Primary _ Foreign Keys
CREATE TABLE posts (
    id INT PRIMARY KEY,
    content VARCHAR(256) NOT NULL,
    userId INT,
    FOREIGN KEY (userId)
        REFERENCES usersOfInsta (id)
);

-- 14. INSERT into Table
INSERT INTO usersOfInsta 
(id,age,Name,Email,Followers,Following)
values
(1,23,"arvind", "arvindanand@gmail.com",3000,2000),
(2,23,"kitty", "kittisingh@gmail.com",4000,3000),
(3,28,"raghu", "raghu@gmail.com",5000,4000),
(4,15,"pk singh", "pksingh@gmail.com",6000,5000),
(5,20,"sonu", "sonu@gmail.com",7000,6000),
(6,22,"aadi", "aadi@gmail.com",8000,7000);

-- TRUNCATE TABLE usersOfInsta;

-- INSERT INTO usersOfInsta 
-- (id,age,Name,Email,Followers,Following)
-- values
-- (1,23,"abcd", "abcdefgh",250,300) ERROR BECAUSE OF DUPLICATE ENTRY OF SAME ID IS NOT POSSIBLE BECAUSE OF PRIMARY KEY
-- (2,23,"abcd", "arvindanand",250,300) ERROR BECAUSE OF SAME EMAIL CONSTRAINSTS
-- (3,23) ERROR BECAUSE OF NULL NAME CONSTRAINSTS
-- (2,10,"abcd", "arvindanand",250,300) ERROR BECAUSE OF LESS THAN AGE 13 CONSTRAINSTS

-- 15. SELECT Command
SELECT * from usersOfInsta;
SELECT name, age, email from usersOfInsta;
SELECT name, followers from usersOfInsta;
SELECT name, followers from usersOfInsta;
SELECT distinct age from usersOfInsta;
SELECT distinct followers from usersOfInsta;

-- HOMEWORK PROBLEM
INSERT INTO posts 
(id,content,userId)
values
(1,"Hey i am a coder!",1),
(2,"Hey i am a BusinessWomen",2);
-- TRUNCATE TABLE posts; -- TO DELETE ALL DATA FROM THE TABLE

-- 01. Where Clause
SELECT * from usersOfInsta WHERE followers>=3000;
SELECT name from usersOfInsta WHERE followers>=3000;
SELECT name,followers from usersOfInsta WHERE followers>=3000;

 -- 02. Operators in Where
SELECT name,age from usersOfInsta WHERE age+1=24;

-- 03. Frequently Used Operators
SELECT name,age from usersOfInsta WHERE age>=23 AND followers>300;
SELECT name,age,followers from usersOfInsta WHERE age>=23 OR followers>300;
SELECT name,age from usersOfInsta WHERE age BETWEEN 20 AND 25;
SELECT name,email from usersOfInsta WHERE email IN ("arvindanand","kittisingh","abcd");
SELECT name,age from usersOfInsta WHERE age IN (23,24,25); -- age either 23, or 24 or 25 will be selected
SELECT name,age from usersOfInsta WHERE age NOT IN (23,24,25); -- age of 23, or 24 or 25 will be not selected

-- 04. Limit Clause
SELECT name,age from usersOfInsta limit 2; -- It will give only 2 value from the top of the data
SELECT name,age from usersOfInsta limit 3; -- It will give only 3 value from the top of the data
SELECT name,age from usersOfInsta limit 5; -- It will give only 5 value from the top of the data
SELECT name,age,followers from usersOfInsta WHERE age>=15 limit 3;

-- 05. Order By Clause
SELECT name,followers from usersOfInsta ORDER BY followers; -- DEFAULT IS ASCENDING ORDER WILL BE FILTERED
SELECT name,followers from usersOfInsta ORDER BY followers ASC;
SELECT name,followers from usersOfInsta ORDER BY followers DESC;
SELECT name,followers from usersOfInsta ORDER BY followers ASC limit 3;
SELECT name,followers from usersOfInsta ORDER BY followers DESC limit 3;
SELECT name,followers from usersOfInsta WHERE age>=15 ORDER BY followers ASC limit 3;
SELECT name,followers from usersOfInsta WHERE age>=15 ORDER BY followers DESC limit 3;
SELECT name,followers from usersOfInsta WHERE age>=15 ORDER BY followers ASC;
SELECT name,followers from usersOfInsta WHERE age>=15 ORDER BY followers DESC;

-- 06. Aggregate Functions
SELECT max(followers) from usersOfInsta;
SELECT count(age) from usersOfInsta where age=23;
SELECT min(age) from usersOfInsta;
SELECT avg(age) from usersOfInsta;
SELECT sum(age) from usersOfInsta;

 -- 07. Group By Clause
SELECT age from usersOfInsta group by age;
SELECT age, max(followers) from usersOfInsta group by age;
SELECT age, count(id) from usersOfInsta group by age;
SELECT followers, count(id) from usersOfInsta group by id;
SELECT id, count(id) from usersOfInsta group by id;

-- 08. Having Clause
SELECT age, max(followers) from usersOfInsta group by age having max(followers)<=4000;
SELECT age, max(followers) from usersOfInsta group by age having max(followers)>=5000;

-- 09. General Order
SELECT age, max(followers) from usersOfInsta group by age having max(followers)>=5000 order by age ASC;
SELECT age, max(followers) from usersOfInsta group by age having max(followers)>=5000 order by age DESC;

-- 10. UPDATE Table
SET SQL_SAFE_UPDATES=0; -- DEFAULT SAFE UPDATE IS SET TO 1 (THIS AVOID UPDATEING THE DATA INITITALLY)
UPDATE usersofinsta set followers=2500 where age=23 AND name="arvind";
UPDATE usersofinsta set followers=5500 where age=28;
SELECT * FROM usersofinsta;
UPDATE usersofinsta set name="kitty singh" where id=2;

-- 11. DELETE Table
DELETE from usersofinsta WHERE age=22;
SELECT * FROM usersofinsta;

-- 12. ALTER Table
ALTER table usersofinsta ADD column city varchar(50) default "Delhi";
SELECT * FROM usersofinsta;

ALTER table usersofinsta DROP column age;
SELECT * FROM usersofinsta;

ALTER table usersofinsta RENAME to instauser;
SELECT * FROM instauser;

ALTER table instauser RENAME to usersofinsta;

ALTER table usersofinsta CHANGE column followers Subscribe INT default 0;
ALTER table usersofinsta CHANGE column Subscribe Subscriber INT default 0;
SELECT * FROM usersofinsta;

ALTER table usersofinsta MODIFY Subscriber INT default 10000;
SELECT * FROM usersofinsta;

INSERT INTO usersOfInsta 
(id,Name,Email,Following)
values
(7,"viku", "viku@gmail.com",2000); -- it will set subscriber to default value of 10000
SELECT * FROM usersofinsta;

-- 13. TRUNCATE Table
DROP TABLE POSTS; -- TO AVOID ALREADY SET PRIMARY KEY AND FOREIGN KEY LINKED WITH THIS TABLE AND POST TABLE
TRUNCATE Table usersofinsta;
SELECT * FROM usersofinsta;


-- 14. Practice Qs1
create database college;
use college;
create table Teacher(
id INT,
name varchar(30),
subject varchar(30),
salary INT
);

INSERT INTO Teacher values
(id,name,subject,salary),
(23,"arvind","math",50000),
(24,"kitty","english",60000),
(28,"raghu","chemistry",45000),
(25,"pk","physics",75000);

select * from teacher;
select * from teacher WHERE SALARY>50000;
ALTER TABLE teacher CHANGE column salary ctc INT default 50000;
select * from teacher;
UPDATE teacher set ctc=(ctc+ctc*0.25);
select * from teacher;
ALTER table teacher ADD column city varchar(50) default "Gurgaon";
select * from teacher;
ALTER table teacher DROP column ctc;
select * from teacher;

-- 15. Practice Qs2
use college;
create table student(
roll_no INT,
name varchar(30),
city varchar(30),
marks INT
);

INSERT INTO student values
(roll_no,name,city,marks),
(110,"arvind","Delhi",70),
(115,"arvind2","Delhi",75),
(108,"kitty","Muz",80),
(124,"raghu","Sitamarhi",90),
(112,"pk","Muzzafarpur",95);
-- truncate table student;

select * from student;
select * from student where marks>70;
select city from student;
select max(marks) from student;
SELECT city, max(marks) from student group by city;
select avg(marks) from student;
ALTER table student ADD column grade varchar(2);
select * from student;
UPDATE student set grade="O" where marks>80;
select * from student;
UPDATE student set grade="A" WHERE marks BETWEEN 71 AND 80;
UPDATE student set grade="A" WHERE marks>= 70 AND marks< 80;
select * from student;
UPDATE student set grade="B" WHERE marks BETWEEN 60 AND 70;
UPDATE student set grade="B" WHERE marks>= 60 AND marks< 70;
select * from student;












