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
    foreign key (userId) references usersOfInsta(id)
);

-- 14. INSERT into Table
INSERT INTO usersOfInsta 
(id,age,Name,Email,Followers,Following)
values
(1,23,"arvind", "arvindanand",250,300),
(2,23,"kitty", "kittisingh",5000,3000),
(3,28,"raghu", "raghu",4000,5000);

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

TRUNCATE TABLE posts;




















