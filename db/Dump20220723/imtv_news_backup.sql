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
-- Table structure for table `news_backup`
--

DROP TABLE IF EXISTS `news_backup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_backup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) DEFAULT NULL,
  `imageLarge` varchar(255) DEFAULT NULL,
  `dateKR` varchar(255) DEFAULT NULL,
  `dateENG` varchar(255) DEFAULT NULL,
  `titleKR` varchar(255) DEFAULT NULL,
  `titleENG` varchar(255) DEFAULT NULL,
  `bodyKR` longtext,
  `bodyENG` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='    id: 1,\n    image: "/assets/images//news/news1.jpg",\n    imageLarge: "/assets/images/news/news1large2.jpg",\n    dateKR: "2022 1월 13",\n    dateENG: "13th Jan 2022",\n    titleKR: "안은진·유아인·전성우·김윤혜, ''종말의 바보'' 출연 확정(공식)",\n    titleENG:\n      "Ahn Eun-jin, Yoo Ah-in, Jeon Seong-woo, and Kim Yun-hye confirmed to appear in ''The Fool of the End'' (official)",\n    bodyKR: [\n      "''종말의 바보''는 지구와 소행성 충돌까지 200일, 눈앞에 예고된 종말을 앞두고 혼란에 빠진 세상과 남은 시간을 살아가는 사람들의 이야기를 그린 넷플릭스 시리즈다.",\n      "안은진은 진세경을 연기한다. 한때 중학교 기술가정교사였지만 소행성 사태 발발 후 웅천시청 아동청소년부에서 자원봉사를 하며 위험에 빠진 아이들을 지키기 위해 남몰래 고군분투하는 인물이다.넷플릭스 시리즈 ''지옥''으로 전 세계를 강타한 유아인은 하윤상 역을 맡아 넷플릭스와 다시 조우한다. 윤상은 세경의 오랜 연인이자 생명공학연구소 연구원으로 안전한 미국에서 위험 지역인 대한민국으로 한달음에 달려와 세경 곁을 지킨다",\n      "전성우는 우성재 역을 맡았다. 소행성 사태가 발표된 후 사라진 주임신부를 대신해 하루아침에 보좌신부가 된 그는 각종 소문에 혼란스러운 마음을 다잡고 신도들을 보살핀다.김윤혜는 강인아 역에 낙점되었다. 인아는 전투근무지원 대대 중대장으로 보급 수송과 치안 유지를 위해 폐허가 된 웅천시 곳곳을 누빈다.200일 후 예정된 종말을 앞두고 서로 다른 위치에 있는 인물들은 각자 어떤 신념과 선택으로 삶의 마지막을 맞이하게 될지 궁금증을 자아낸다.",\n      "''종말의 바보''는 ''인간수업'', ''마이 네임''의 김진민 감독과 ''밀회''의 정성주 작가가 의기투합 했다.제작사인 아이엠티브이는 주연배우들의 캐';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_backup`
--

LOCK TABLES `news_backup` WRITE;
/*!40000 ALTER TABLE `news_backup` DISABLE KEYS */;
/*!40000 ALTER TABLE `news_backup` ENABLE KEYS */;
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
