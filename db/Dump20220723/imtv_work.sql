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
INSERT INTO `work` VALUES (1,2,'쉿! 그놈을 부탁해','Shh! Take Care of Him.','./assets/images/work/shhWide.png','./assets/images/work/shhTall.jpg','https://youtu.be/0mC8ANbrC_s','https://youtu.be/5_youLWtOV8','olleh tv, Seezn, Skylife','2021.05.28','이정훈','자인, 방사랑 ','김슬기, 이주우, 송지은, 강율','홍대 한복판에 수상한 네일샵이 오픈했다! 복수를 ‘시술’이라 부르는 네일샵 여자들의 화끈한 복수컨설팅!','Lee Jung Hoon','Jain, Bang Sarang ','Kim Seulgi, Lee Juwoo, Song Jieun, Kang Yul','A suspicious nail shop opened in the middle of Hongdae! The hot revenge consulting of nail shop women who call revenge procedure!','','','','','0'),(2,3,'그남자 오수','Mr Osu','./assets/images/work/osuWide.png','./assets/images/work/osuTall.jpg','https://youtu.be/_JcnedmLy38','https://youtu.be/dAlrU9UYPXU','OCN','2018.03.05 ~ 2018.04.24','남기훈','정유선','이종현, 김소은','연애감 없는 현대판 큐피드 남자 오수와 연애 허당녀 유리의 둘만 모르는 확실한 썸로맨스.','Nam Ki-hoon','Jeong Yoo-sun ','Jonghyun Lee, Soeun Kim','Mr Osu, a modern Cupid man without a sense of love begins a relationship with a woman named Yuri.','','','','','0'),(3,4,'메멘토모리','Memento Mori','./assets/images/work/mementoWide.png','./assets/images/work/mementoTall.jpg','https://youtu.be/oxOPg3AeteE','https://youtu.be/BMbQYtWmcmo','','2018.06.28','이철민','조규원, 오기원','황승언, 재희, 김호정, 차순배','갑자기 그들이 깨어났다.‌누구의 소행인지 알 수 없는 가운데 6명이 한 장소에서 동시에 깨어났다. ‌연결고리가 없는 이들 6명이 벌이는 생존 게임이 시작됐다.','Lee Chul-min','Gyu-won Jo, Oh Ki-won ','Hwang Seung-eon, Jae-hee, Kim Ho-jeong, Cha Soon-bae','Six people woke up at the same time in one place, without knowing why. A survival game played by these six people without a connection has begun..','','','','','0'),(4,5,'다시 만난 세계','Reunited World','./assets/images/work/worldWide.png','./assets/images/work/worldTall.jpg','https://youtu.be/kOeYJBzbLsI','https://youtu.be/SLaU1iEbwB0','SBS','2017.07.07 ~ 2017.09.21','백수찬','이희명','여진구, 이연희','열아홉 살 청년과 같은 해 태어난 동갑 친구인 서른한 살 여자. 12년 나이 차이가 나는 동갑 소꿉친구 남녀의 판타지 로맨스.','Baek Soo-chan','Lee Hee-myung','Yeo Jin-goo, Lee Yeon-hee','A 31-year-old woman, a friend of the same age, was born the same year as a 19-year-old young man. Fantasy romance between childhood friends of the same age with a 12-year age difference.','','','','','0'),(5,6,'스파이','Spy','./assets/images/work/spyWide.png','./assets/images/work/spyTall.jpg','','https://youtu.be/ocWTnNFRyuA','SBS','2015.01.09 ~ 2015.03.06','박현석','한상운, 이강','김재중, 배종옥, 유오성','전직 스파이. 지금은 평범한 가정주부인 혜림. 정보국에서 일하는 아들을 포섭하라는 청천벽력 같은 임무로 사랑하는 가족을 지키기 위해 다시 한번 스파이로 나선다.','Park Hyun-seok','Han Sang-woon, Lee Kang','Jaejoong Kim, Jongok Bae, Ohseong Yoo','Former Spy Hyerim is now an ordinary housewife. She becomes a spy once again to protect her beloved family on a mission to recruit her son who works for the intelligence service.','','','','','0'),(6,7,'내 연애의 기억','Memories of My Love','./assets/images/work/memoriesWide.png','./assets/images/work/memoriesTall.jpg','','https://youtu.be/cXH-AVPl8Bw','','2014.08.20','이권','정성숙, 이권 ','강예원, 송새벽','씁쓸한 기억만 남긴 여섯 번의 연애 후 다시는 연애 따위 하지 않으리라 마음먹은 은진(강예원). 하지만 그녀 앞에 나타난 순수하고 로맨틱한 현석(송새벽)으로 인해 은진은 다시 사랑을 시작하게 된다. 수상하게 달콤하고 심장 떨리게 로맨틱한 연애가 시작된다!','IMTV','Seong-Suk Jeong, Kwon Lee','Kang Ye-won, Song Sae-byeok','Eun-Jin (Kang Ye-Won) decides that she will never love again after six bitter breakups. But when romantic Hyun-seok (Song Sebyok) who appears in front of her, Eun-jin begins to fall in love again. A sweet and heartbreaking relationship begins!','','','','','0'),(7,8,'마법천자문 ','Magic Scroll','./assets/images/work/magicWide.jpg','./assets/images/work/magicTall.jpg','','https://youtu.be/HlVqt7ry-nQ','KBS2','2014.08.06 ~ 2014.11.19','이청민','권인찬','신기준, 이지우, 천이슬','현실 세계에서 환생한 주인공들이 인간 세계에 던져진 10개의 한자 마법을 찾기 위해 벌이는 고군분투 이야기','Cheongmin Lee','Kwon In-chan','Ki-joon Shin, Ji-woo Lee, Lee Seul Cheon','Reincarnated heroes struggle to find 10 magic Chinese character scrolls thrown into the human world.','','','','','0'),(8,9,'곡비','Gokbi','./assets/images/work/singWide.png','./assets/images/work/singTall.png','','https://youtu.be/KVLRUu7m1a8','KBS','2014.03.09','이은진','허지영','김유정, 서준영','‌조선시대를 배경으로 당시 양반가에서 상을 당했을 때 곡을 해야하는 노비들의 이야기를 그린 드라마','Eunjin Lee','Heo Ji-young','Kim Yoo-jung, Seo Jun-young','Set in the Joseon Dynasty, this drama depicts the story of slaves who had to sing when they were rewarded by a noble family at the time.','','','','','0'),(9,10,'0시의 그녀','Girl of 0am','./assets/images/work/zeroWide.png','./assets/images/work/zeroTall.png','','https://youtu.be/qDwp1jd2EMo','네이버 MBC every1','2015.05.04','이철민','윤진','남태현, 김민지, 손진영','‌슈퍼스타를 꿈꾸던 주인공 지단.우연히 운영을 맡게된 노래방에서 수상한 알바생 세라를 통해 신비한 경험을 하게 되는데…','Lee Chul-min','Jin Yoon','Nam Tae-hyun, Kim Min-ji, Son Jin-young','Zidane dreamed of becoming a superstar. Accidentally taking over a karaoke bar, he is reminded of his dream when he meets part-timer Sera.','','','','','0'),(10,11,'밀키드 ','Meal Kid','./assets/images/work/mealkidWide.jpg','./assets/images/work/mealkidTall.jpg','','https://www.youtube.com/watch?v=xnecaOsKp0c','네이버','2020.11.16','이창한','문소산','박나은, 정대현, 주호','‌최고의 맛을 추구하는 식품 회사 MD들의 좌충우돌 오피스 성장기','Changhan Lee','Mun So-san','Park Na-eun, Jeong Dae-hyun, Joo-ho','Food company MDs who pursue the best taste.','','','','','0'),(11,1,'중말의 바보','Fool in the End','./assets/images/work/foolWide.jpg','./assets/images/work/foolTall.png','','','Netflix','','','','','‌<종말의 바보>는 지구와 소행성 충돌까지 200일, 눈앞에 예고된 종말을 앞두고 혼란에 빠진 세상과 남은 시간을 살아가는 사람들의 이야기를 그린 넷플릭스 시리즈다.','','','','‌200 days until an asteroid collides with the Earth. The world is in chaos ahead of the foretold end.','넷플릭스와 협업','In collaboration with Netflix','rgb(174, 213, 243)','rgb(33,54,80)','1');
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
