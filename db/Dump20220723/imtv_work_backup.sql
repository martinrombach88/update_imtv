-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: imtv
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `work_backup`
--

DROP TABLE IF EXISTS `work_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_backup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titleKR` varchar(45) DEFAULT NULL,
  `titleENG` varchar(45) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `imageTall` varchar(45) DEFAULT NULL,
  `clipVid` varchar(45) DEFAULT NULL,
  `fullVid` varchar(45) DEFAULT NULL,
  `channels` varchar(45) DEFAULT NULL,
  `releaseDate` varchar(45) DEFAULT NULL,
  `producerKR` varchar(45) DEFAULT NULL,
  `writerKR` varchar(45) DEFAULT NULL,
  `starringKR` varchar(255) DEFAULT NULL,
  `descriptionKR` varchar(255) DEFAULT NULL,
  `producerENG` varchar(45) DEFAULT NULL,
  `writerENG` varchar(45) DEFAULT NULL,
  `starringENG` varchar(255) DEFAULT NULL,
  `descriptionENG` varchar(255) DEFAULT NULL,
  `subTitleKR` varchar(45) DEFAULT NULL,
  `subTitleENG` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `backgroundColor` varchar(45) DEFAULT NULL,
  `inProduction` varchar(5) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_backup`
--

LOCK TABLES `work_backup` WRITE;
/*!40000 ALTER TABLE `work_backup` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_backup` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-23 21:14:44
