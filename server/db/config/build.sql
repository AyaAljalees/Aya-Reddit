BEGIN;
DROP TABLE IF EXISTS users,posts, comments, votes CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(50) UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL ,
    content TEXT NOT NULL ,
  image_url TEXT,
  userId INTEGER NOT NULL,
  CONSTRAINT fk_userId FOREIGN KEY (userId) REFERENCES users(id) ,
   created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
 
);
CREATE TABLE votes (
    id INTEGER PRIMARY KEY ,
    voteType TEXT NOT NULL,
    userId INTEGER NOT NULL,
    CONSTRAINT fk_userId FOREIGN KEY (userId) REFERENCES users(id),
    posts_id INTEGER NOT NULL,
    CONSTRAINT fk_postId FOREIGN KEY (posts_id) REFERENCES posts(id),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP

);
CREATE TABLE comments (
    id INTEGER PRIMARY KEY ,
    content_comments TEXT NOT NULL ,
    userId INTEGER NOT NULL,
    CONSTRAINT fk_userId FOREIGN KEY (userId) REFERENCES users(id),
     posts_id INTEGER NOT NULL ,
    CONSTRAINT fk_postId FOREIGN KEY (posts_id) REFERENCES posts(id) ,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP 
); 
INSERT INTO users(username, password) VALUES ('aya' ,'admin');
COMMIT;
