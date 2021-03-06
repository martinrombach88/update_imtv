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
-- Table structure for table `work`
--

DROP TABLE IF EXISTS `work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orderID` int DEFAULT '0',
  `titleKR` varchar(45) DEFAULT NULL,
  `titleENG` varchar(45) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `imageTall` varchar(255) DEFAULT NULL,
  `clipVid` varchar(255) DEFAULT NULL,
  `fullVid` varchar(255) DEFAULT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work`
--

LOCK TABLES `work` WRITE;
/*!40000 ALTER TABLE `work` DISABLE KEYS */;
INSERT INTO `work` VALUES (1,2,'???! ????????? ?????????','Shh! Take Care of Him.','./assets/images/work/shhWide.png','./assets/images/work/shhTall.jpg','https://youtu.be/0mC8ANbrC_s','https://youtu.be/5_youLWtOV8','olleh tv, Seezn, Skylife','2021.05.28','?????????','??????, ????????? ','?????????, ?????????, ?????????, ??????','?????? ???????????? ????????? ???????????? ????????????! ????????? ?????????????????? ????????? ????????? ???????????? ????????? ???????????????!','Lee Jung Hoon','Jain, Bang Sarang ','Kim Seulgi, Lee Juwoo, Song Jieun, Kang Yul','A suspicious nail shop opened in the middle of Hongdae! The hot revenge consulting of nail shop women who call revenge procedure!','','','','','0'),(2,3,'????????? ??????','Mr Osu','./assets/images/work/osuWide.png','./assets/images/work/osuTall.jpg','https://youtu.be/_JcnedmLy38','https://youtu.be/dAlrU9UYPXU','OCN','2018.03.05 ~ 2018.04.24','?????????','?????????','?????????, ?????????','????????? ?????? ????????? ????????? ?????? ????????? ?????? ????????? ????????? ?????? ????????? ????????? ????????????.','Nam Ki-hoon','Jeong Yoo-sun ','Jonghyun Lee, Soeun Kim','Mr Osu, a modern Cupid man without a sense of love begins a relationship with a woman named Yuri.','','','','','0'),(3,4,'???????????????','Memento Mori','./assets/images/work/mementoWide.png','./assets/images/work/mementoTall.jpg','https://youtu.be/oxOPg3AeteE','https://youtu.be/BMbQYtWmcmo','','2018.06.28','?????????','?????????, ?????????','?????????, ??????, ?????????, ?????????','????????? ????????? ????????????.???????????? ???????????? ??? ??? ?????? ????????? 6?????? ??? ???????????? ????????? ????????????. ?????????????????? ?????? ?????? 6?????? ????????? ?????? ????????? ????????????.','Lee Chul-min','Gyu-won Jo, Oh Ki-won ','Hwang Seung-eon, Jae-hee, Kim Ho-jeong, Cha Soon-bae','Six people woke up at the same time in one place, without knowing why. A survival game played by these six people without a connection has begun..','','','','','0'),(4,5,'?????? ?????? ??????','Reunited World','./assets/images/work/worldWide.png','./assets/images/work/worldTall.jpg','https://youtu.be/kOeYJBzbLsI','https://youtu.be/SLaU1iEbwB0','SBS','2017.07.07 ~ 2017.09.21','?????????','?????????','?????????, ?????????','????????? ??? ????????? ?????? ??? ????????? ?????? ????????? ????????? ??? ??????. 12??? ?????? ????????? ?????? ?????? ???????????? ????????? ????????? ?????????.','Baek Soo-chan','Lee Hee-myung','Yeo Jin-goo, Lee Yeon-hee','A 31-year-old woman, a friend of the same age, was born the same year as a 19-year-old young man. Fantasy romance between childhood friends of the same age with a 12-year age difference.','','','','','0'),(5,6,'?????????','Spy','./assets/images/work/spyWide.png','./assets/images/work/spyTall.jpg','','https://youtu.be/ocWTnNFRyuA','SBS','2015.01.09 ~ 2015.03.06','?????????','?????????, ??????','?????????, ?????????, ?????????','?????? ?????????. ????????? ????????? ??????????????? ??????. ??????????????? ????????? ????????? ??????????????? ???????????? ?????? ????????? ???????????? ????????? ????????? ?????? ?????? ?????? ???????????? ?????????.','Park Hyun-seok','Han Sang-woon, Lee Kang','Jaejoong Kim, Jongok Bae, Ohseong Yoo','Former Spy Hyerim is now an ordinary housewife. She becomes a spy once again to protect her beloved family on a mission to recruit her son who works for the intelligence service.','','','','','0'),(6,7,'??? ????????? ??????','Memories of My Love','./assets/images/work/memoriesWide.png','./assets/images/work/memoriesTall.jpg','','https://youtu.be/cXH-AVPl8Bw','','2014.08.20','??????','?????????, ?????? ','?????????, ?????????','????????? ????????? ?????? ?????? ?????? ?????? ??? ????????? ?????? ?????? ?????? ???????????? ???????????? ??????(?????????). ????????? ?????? ?????? ????????? ???????????? ???????????? ??????(?????????)?????? ?????? ????????? ?????? ????????? ???????????? ??????. ???????????? ???????????? ?????? ????????? ???????????? ????????? ????????????!','IMTV','Seong-Suk Jeong, Kwon Lee','Kang Ye-won, Song Sae-byeok','Eun-Jin (Kang Ye-Won) decides that she will never love again after six bitter breakups. But when romantic Hyun-seok (Song Sebyok) who appears in front of her, Eun-jin begins to fall in love again. A sweet and heartbreaking relationship begins!','','','','','0'),(7,8,'??????????????? ','Magic Scroll','./assets/images/work/magicWide.jpg','./assets/images/work/magicTall.jpg','','https://youtu.be/HlVqt7ry-nQ','KBS2','2014.08.06 ~ 2014.11.19','?????????','?????????','?????????, ?????????, ?????????','?????? ???????????? ????????? ??????????????? ?????? ????????? ????????? 10?????? ?????? ????????? ?????? ?????? ????????? ???????????? ?????????','Cheongmin Lee','Kwon In-chan','Ki-joon Shin, Ji-woo Lee, Lee Seul Cheon','Reincarnated heroes struggle to find 10 magic Chinese character scrolls thrown into the human world.','','','','','0'),(8,9,'??????','Gokbi','./assets/images/work/singWide.png','./assets/images/work/singTall.png','','https://youtu.be/KVLRUu7m1a8','KBS','2014.03.09','?????????','?????????','?????????, ?????????','?????????????????? ???????????? ?????? ??????????????? ?????? ????????? ??? ?????? ???????????? ???????????? ???????????? ?????? ?????????','Eunjin Lee','Heo Ji-young','Kim Yoo-jung, Seo Jun-young','Set in the Joseon Dynasty, this drama depicts the story of slaves who had to sing when they were rewarded by a noble family at the time.','','','','','0'),(9,10,'0?????? ??????','Girl of 0am','./assets/images/work/zeroWide.png','./assets/images/work/zeroTall.png','','https://youtu.be/qDwp1jd2EMo','????????? MBC every1','2015.05.04','?????????','??????','?????????, ?????????, ?????????','?????????????????? ????????? ????????? ??????.????????? ????????? ????????? ??????????????? ????????? ????????? ????????? ?????? ????????? ????????? ?????? ????????????','Lee Chul-min','Jin Yoon','Nam Tae-hyun, Kim Min-ji, Son Jin-young','Zidane dreamed of becoming a superstar. Accidentally taking over a karaoke bar, he is reminded of his dream when he meets part-timer Sera.','','','','','0'),(10,11,'????????? ','Meal Kid','./assets/images/work/mealkidWide.jpg','./assets/images/work/mealkidTall.jpg','','https://www.youtube.com/watch?v=xnecaOsKp0c','?????????','2020.11.16','?????????','?????????','?????????, ?????????, ??????','???????????? ?????? ???????????? ?????? ?????? MD?????? ???????????? ????????? ?????????','Changhan Lee','Mun So-san','Park Na-eun, Jeong Dae-hyun, Joo-ho','Food company MDs who pursue the best taste.','','','','','0'),(11,1,'????????? ??????','Fool in the End','./assets/images/work/foolWide.jpg','./assets/images/work/foolTall.png','','','Netflix','','','','','???<????????? ??????>??? ????????? ????????? ???????????? 200???, ????????? ????????? ????????? ????????? ????????? ?????? ????????? ?????? ????????? ???????????? ???????????? ???????????? ?????? ???????????? ????????????.','','','','???200 days until an asteroid collides with the Earth. The world is in chaos ahead of the foretold end.','??????????????? ??????','In collaboration with Netflix','rgb(174, 213, 243)','rgb(33,54,80)','1');
/*!40000 ALTER TABLE `work` ENABLE KEYS */;
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
