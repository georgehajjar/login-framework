CREATE DATABASE IF NOT EXISTS `accountInfo` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `accountInfo`;

CREATE TABLE IF NOT EXISTS `users` (
	`id` INTEGER PRIMARY KEY AUTO_INCREMENT,
	`email` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	`createdAt` VARCHAR(255) NOT NULL,
	`updatedAt` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8;

SELECT * FROM users;