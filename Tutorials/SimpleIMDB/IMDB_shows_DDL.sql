DROP SCHEMA IF EXISTS simple_imdb CASCADE;
CREATE SCHEMA simple_imdb;

SET SCHEMA 'simple_imdb';

create table people
(
    id    INTEGER PRIMARY KEY,
    name  TEXT NOT NULL,
    birth SMALLINT
);

create table shows
(
    id       INTEGER PRIMARY KEY,
    title    VARCHAR(250) NOT NULL,
    year     SMALLINT   ,
    episodes INT
);

create table genres
(
    show_id INTEGER NOT NULL ,
    genre   VARCHAR(100)    not null
);

create table ratings
(
    show_id INTEGER NOT NULL ,
    rating  DECIMAL(3,1)    NOT NULL,
    votes   INTEGER NOT NULL
);

create table stars
(
    show_id   INTEGER NOT NULL ,
    person_id INTEGER NOT NULL
);

create table writers
(
    show_id   INTEGER NOT NULL ,
    person_id INTEGER NOT NULL
);

