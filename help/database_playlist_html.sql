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
-- Table structure for table `sound1`
--

CREATE TABLE IF NOT EXISTS `sound1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `sound1`
--

INSERT INTO `sound1` (`id`, `path`) VALUES
(1, '<li class= ''playlistItem'' data-type=''local'' data-mp3=''../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3'' data-ogg=''../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg'' data-dlink data-thumb=''../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.jpg''><a class=''playlistNonSelected'' href=''#''>Tim McMorris - A Bright And Hopeful Future</a></li>'),
(2, '<li class= ''playlistItem'' data-type=''podcast'' data-path=''http://robertkelly.libsyn.com/rss'' data-dlink data-thumb=''media/default_artwork/podcast/01.jpg''><a class=''plink'' href=''http://codecanyon.net/user/Tean/portfolio'' target=''_blank''><img src=''media/data/purchase.png'' alt = ''purchase''/></a></li>\r\n'),
(3, '<li class= ''playlistItem'' data-type=''soundcloud'' data-path=''http://soundcloud.com/computer-magic'' data-dlink data-thumb=''media/default_artwork/soundcloud/01.jpg''/>'),
(4, '<li class= ''playlistItem'' data-type=''ofm_single'' data-path=''GGXE'' data-thumb=''media/default_artwork/ofm_single/01.jpg''></li>'),
(5, '<li class= ''playlistItem'' data-type=''ofm_playlist'' data-dlink data-path=''1rp7'' data-thumb=''media/default_artwork/ofm_playlist/01.jpg''></li>'),
(6, '<li class= ''playlistItem'' data-type=''ofm_project'' data-dlink data-path=''edB6'' data-plink=''http://codecanyon.net/user/Tean/portfolio'' data-thumb=''media/default_artwork/ofm_project/01.jpg''></li>'),
(7, '<li class= ''playlistItem'' data-type=''youtube_single'' data-path=''opL4oe62XL8'' data-plink=''http://www.google.com'' data-thumb=''media/default_artwork/yt_single/01.jpg''></li>'),
(8, '<li class= ''playlistItem'' data-type=''youtube_playlist'' data-path=''PLE0311B1CFA360F55'' data-thumb=''media/default_artwork/yt_playlist/01.jpg''></li>');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
