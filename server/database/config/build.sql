BEGIN;
DROP TABLE IF EXISTS cities CASCADE;
CREATE TABLE cities (
  id serial PRIMARY KEY,
  username varchar(20),
  city varchar(20) 
);

INSERT INTO cities (username, city) values ('Sajeda', 'Gaza'), ('Ali', 'Rafah'), ('Yousof', 'Paris');
COMMIT;