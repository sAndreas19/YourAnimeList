-- CreateTable
CREATE TABLE `Collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `anime_image` VARCHAR(191) NOT NULL,
    `anime_title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Collection_user_email_anime_id_key`(`user_email`, `anime_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anime_id` VARCHAR(191) NOT NULL,
    `user_email` VARCHAR(191) NOT NULL,
    `comment` TEXT NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `anime_title` VARCHAR(191) NOT NULL,
    `anime_image` VARCHAR(191) NULL,
    `user_image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
