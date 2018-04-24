-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 04, 2013 at 05:43 PM
-- Server version: 5.5.16
-- PHP Version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ap_hap`
--

-- --------------------------------------------------------

--
-- Table structure for table `sound`
--

CREATE TABLE IF NOT EXISTS `sound` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` text NOT NULL,
  `mp3` text NOT NULL,
  `ogg` text,
  `title` text,
  `thumb` text,
  `download` text,
  `dlink` text,
  `plink` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `sound`
--

INSERT INTO `sound` (`id`, `type`, `mp3`, `ogg`, `title`, `thumb`, `download`, `dlink`, `plink`) VALUES
(1, 'local', '../media/audio/2/Soundroll_-_Rush.mp3', '../media/audio/2/Soundroll_-_Rush.ogg', 'Tim McMorris - A Bright And Hopeful Future', '../media/audio/2/Soundroll_-_Rush.jpg', 'true', 'true', NULL),
(2, 'podcast', 'http://robertkelly.libsyn.com/rss', NULL, NULL, 'media/default_artwork/podcast/01.jpg', NULL, NULL, NULL),
(3, 'soundcloud', 'http://soundcloud.com/computer-magic', NULL, NULL, 'media/default_artwork/soundcloud/01.jpg', NULL, NULL, 'http://codecanyon.net/user/Tean/portfolio'),
(4, 'youtube_single', 'opL4oe62XL8', NULL, NULL, 'media/default_artwork/yt_single/01.jpg', NULL, NULL, NULL),
(5, 'youtube_playlist', 'PLE0311B1CFA360F55', NULL, NULL, 'media/default_artwork/yt_playlist/01.jpg', NULL, 'true', NULL),
(6, 'ofm_single', 'GGXE', NULL, NULL, 'media/default_artwork/ofm_single/01.jpg', 'true', 'true', 'http://codecanyon.net/user/Tean/portfolio'),
(7, 'ofm_playlist', '1rp7', NULL, NULL, 'media/default_artwork/ofm_playlist/01.jpg', NULL, NULL, NULL),
(8, 'ofm_project', 'edB6', NULL, NULL, 'media/default_artwork/ofm_project/01.jpg', NULL, NULL, 'http://www.google.com');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
