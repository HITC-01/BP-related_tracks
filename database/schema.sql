DROP DATABASE IF EXISTS soundcloud_bp;
CREATE DATABASE soundcloud_bp;
USE soundcloud_bp;

DROP TABLE IF EXISTS `Artists`;

CREATE TABLE `Artists` (
  `id` BIGINT AUTO_INCREMENT,
  `name` VARCHAR(100),
  `user_img` VARCHAR(100),
  `followers` BIGINT DEFAULT 0,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Songs`;

CREATE TABLE `Songs` (
  `id` BIGINT AUTO_INCREMENT,
  `title` VARCHAR(100),
  `artist_id` BIGINT,
  `genre` VARCHAR(100),
  `album_name` VARCHAR(100),
  `album_img` VARCHAR(100),
  `play_count` BIGINT DEFAULT 0,
  `like_count` BIGINT DEFAULT 0,
  `repost_count` BIGINT DEFAULT 0,
  `comment_count` BIGINT DEFAULT 0,
  `related_songs` JSON,
  PRIMARY KEY (`id`)
);

ALTER TABLE `Songs` ADD FOREIGN KEY (artist_id) REFERENCES `Artists` (`id`);