-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: dbchamanow
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamento` (
  `COD_SERVICO` int NOT NULL,
  `VALOR_ORCAMENTO` varchar(10) NOT NULL,
  `NUM_COMPROVANTE` int NOT NULL,
  `DATA_SERVICO` date NOT NULL,
  `HORARIO` time NOT NULL,
  `DATA_PAGAMENTO` date DEFAULT NULL,
  `DESCRICAOSTATUS` text NOT NULL,
  `ARQUIVO` blob,
  `DATA_SOLICITACAO` date NOT NULL,
  `COD_CONTRATANTE` int NOT NULL,
  `COD_PRESTADOR` int NOT NULL,
  `COD_ENDERECO` int NOT NULL,
  `COD_TIPO` int NOT NULL,
  `COD_STATUS` int NOT NULL,
  PRIMARY KEY (`COD_SERVICO`),
  UNIQUE KEY `COD_SERVICO` (`COD_SERVICO`),
  UNIQUE KEY `NUM_COMPROVANTE` (`NUM_COMPROVANTE`),
  KEY `fkCOD_ENDERECO` (`COD_ENDERECO`),
  KEY `COD_CONTRATANTE` (`COD_CONTRATANTE`),
  KEY `COD_PRESTADOR` (`COD_PRESTADOR`),
  KEY `fkCOD_TIPO` (`COD_TIPO`),
  CONSTRAINT `COD_CONTRATANTE` FOREIGN KEY (`COD_CONTRATANTE`) REFERENCES `usuario` (`COD_USUARIO`),
  CONSTRAINT `COD_PRESTADOR` FOREIGN KEY (`COD_PRESTADOR`) REFERENCES `usuario` (`COD_USUARIO`),
  CONSTRAINT `fkCOD_ENDERECO` FOREIGN KEY (`COD_ENDERECO`) REFERENCES `endereco` (`COD_ENDERECO`),
  CONSTRAINT `fkCOD_TIPO` FOREIGN KEY (`COD_TIPO`) REFERENCES `tipo_servico` (`COD_TIPO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamento`
--

LOCK TABLES `agendamento` WRITE;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avaliacao_usuario`
--

DROP TABLE IF EXISTS `avaliacao_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacao_usuario` (
  `COD_AVALIADOR` int NOT NULL,
  `COD_AVALIADO` int NOT NULL,
  `NOTA` float DEFAULT NULL,
  `COMENTARIO` text,
  `DATA_AVALIACAO` date DEFAULT NULL,
  KEY `COD_AVALIADO` (`COD_AVALIADO`),
  KEY `COD_AVALIADOR` (`COD_AVALIADOR`),
  CONSTRAINT `COD_AVALIADO` FOREIGN KEY (`COD_AVALIADO`) REFERENCES `usuario` (`COD_USUARIO`),
  CONSTRAINT `COD_AVALIADOR` FOREIGN KEY (`COD_AVALIADOR`) REFERENCES `usuario` (`COD_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacao_usuario`
--

LOCK TABLES `avaliacao_usuario` WRITE;
/*!40000 ALTER TABLE `avaliacao_usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacao_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `COD_ENDERECO` int NOT NULL,
  `CEP` varchar(9) NOT NULL,
  `NUMERO` varchar(5) NOT NULL,
  `RUA` varchar(50) NOT NULL,
  `CIDADE` varchar(20) NOT NULL,
  `ESTADO` varchar(2) NOT NULL,
  `COD_USUARIO` int NOT NULL,
  PRIMARY KEY (`COD_ENDERECO`),
  UNIQUE KEY `COD_ENDERECO` (`COD_ENDERECO`),
  KEY `fkCOD_USUARIO` (`COD_USUARIO`),
  CONSTRAINT `fkCOD_USUARIO` FOREIGN KEY (`COD_USUARIO`) REFERENCES `usuario` (`COD_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `telefone`
--

DROP TABLE IF EXISTS `telefone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telefone` (
  `NUMERO` int NOT NULL,
  `COD_AREA` varchar(2) DEFAULT NULL,
  `TIPO` varchar(10) DEFAULT NULL,
  `COD_USUARIO` int NOT NULL,
  KEY `COD_USUARIO` (`COD_USUARIO`),
  CONSTRAINT `COD_USUARIO` FOREIGN KEY (`COD_USUARIO`) REFERENCES `usuario` (`COD_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telefone`
--

LOCK TABLES `telefone` WRITE;
/*!40000 ALTER TABLE `telefone` DISABLE KEYS */;
/*!40000 ALTER TABLE `telefone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_servico`
--

DROP TABLE IF EXISTS `tipo_servico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_servico` (
  `COD_TIPO` int NOT NULL,
  `NOME` varchar(50) NOT NULL,
  `DESCRICAO` text,
  PRIMARY KEY (`COD_TIPO`),
  UNIQUE KEY `COD_TIPO` (`COD_TIPO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_servico`
--

LOCK TABLES `tipo_servico` WRITE;
/*!40000 ALTER TABLE `tipo_servico` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_servico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `COD_USUARIO` int NOT NULL,
  `REGIAO_ATUACAO` varchar(50) DEFAULT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `SENHA` varchar(20) NOT NULL,
  `NOME` varchar(50) NOT NULL,
  `CPF` varchar(14) DEFAULT NULL,
  `CNPJ` varchar(18) DEFAULT NULL,
  `DATA_NASC` date NOT NULL,
  `FOTO_PERFIL` blob NOT NULL,
  `DATA_CRIACAO` date NOT NULL,
  `COD_ENDERECO` int NOT NULL,
  `COD_TIPO` int NOT NULL,
  PRIMARY KEY (`COD_USUARIO`),
  UNIQUE KEY `COD_USUARIO` (`COD_USUARIO`),
  KEY `COD_ENDERECO` (`COD_ENDERECO`),
  KEY `COD_TIPO` (`COD_TIPO`),
  CONSTRAINT `COD_ENDERECO` FOREIGN KEY (`COD_ENDERECO`) REFERENCES `endereco` (`COD_ENDERECO`),
  CONSTRAINT `COD_TIPO` FOREIGN KEY (`COD_TIPO`) REFERENCES `tipo_servico` (`COD_TIPO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31 21:28:58
