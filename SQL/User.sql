CREATE TABLE Users (
  userID INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL UNIQUE,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  countryCode VARCHAR(5) NOT NULL,
  phoneNumber VARCHAR(15) NOT NULL,
  passwordHash VARCHAR(255) NOT NULL,
  role ENUM('Admin', 'Merchant', 'Student', 'Faculty') NOT NULL,
  PRIMARY KEY (userID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;