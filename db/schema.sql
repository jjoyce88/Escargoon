CREATE DATABASE escargoon_data;

USE escargoon_profiles;

CREATE TABLE profiles(
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	username VARCHAR NOT NULL,
	nickname VARCHAR,
	friend_code VARCHAR,
	about_me VARCHAR(1024),
	color VARCHAR(7),
	thumbnail_url VARCHAR,

	PRIMARY KEY (id)
);