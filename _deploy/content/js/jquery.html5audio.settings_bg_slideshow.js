
// SETTINGS

var hap_settings = {
	/* useOnlyMp3Format: true/false (set to true, and on browsers than do not support mp3, flash will be used to play mp3. Also set to true if you plan on using podcast, soundcloud, youtube, ofm) */
	useOnlyMp3Format: true,
	/* sound_id: unique string for player identification (if multiple player instances were used, then strings need to be different!) */
	sound_id: 'bg_slideshow',
	
	/* playlistList: dom elements which holds list of playlists */
	playlistList: '#playlist_list',
	/* activePlaylist: set active playlist that will be loaded on beginning. 
	param1: hidden (boolean) true/false (visible/hidden playlist)
	param2: id (pass element 'id' from the dom)
	Leave empty for no playlist loaded at start like this: activePlaylist: '' */
	activePlaylist: {hidden: true, id: '#playlist1'},
	/* activeItem: active item to start with when playlist is loaded (0 = first, 1 = second, 2 = third... -1 = none) */
	activeItem: 0,
	
	/* autoOpenPlayerInPopup: true/false. Auto open player in popup (removes player in parent window when player in popup opens) */
	autoOpenPlayerInPopup: false,
	/* autoUpdateWindowData: true/false. Auto update data between parent window and popup window (current (last) playlist, active item, last volume) */
	autoUpdateWindowData: true,
	
	/* soundcloudApiKey: If you want to use SoundCloud music, register you own api key here for free: 
	'http://soundcloud.com/you/apps/new' and enter Client ID */
	soundcloudApiKey: '',
	/* soundcloud_result_limit: max number of results to retrieve from soundcloud. BEWARE! Some results may contain thousands of songs so keep this in mind!! */
	soundcloud_result_limit: 2,
	
	/* podcast_result_limit: max number of results to retrieve from podcast. 250 = max possible results by google api feed. */
	podcast_result_limit: 3,
	/* yt_playlist_result_limit: max number of results to retrieve from youtube playlist. 200 = max amount youtube playlist can have. */
	yt_playlist_result_limit: 3,
	/* ofm_result_limit: max number of results to retrieve from official.fm. */
	ofm_result_limit: 3,

	/*defaultVolume: 0-1 (Irrelevant on ios mobile) */
	defaultVolume:0.5,
	/*autoPlay: true/false (false on mobile by default) */
	autoPlay:false,
	/*autoLoad: auto/metadata/none (auto start sound load) */
	autoLoad:'auto',
	/*randomPlay: true/false */
	randomPlay:false,
	/*loopingOn: true/false (loop on the end of the playlist) */
	loopingOn:true,
	
	/* usePlaylistRollovers: true/false. Use rollovers on playlist items (mouseenter, mouseleave + callbacks) */
	usePlaylistRollovers: false,
	/* playlistItemContent: title/thumb/all. Auto create titles or thumbnails in playlist items, or both. */
	playlistItemContent: 'all',
	/* useNumbersInPlaylist: true/false. Prepend numbers in playlist items. */
	useNumbersInPlaylist: false,
	/* titleSeparator: String to append between song number and title. */
	titleSeparator: '.&nbsp;',
	
	/* autoSetSongTitle: true/false. Auto set song title in 'player_mediaName'. */
	autoSetSongTitle: true,
	
	/* useSongNameScroll: true/false. Use song name scrolling. */
	useSongNameScroll: false,
	/* scrollSpeed: speed of the scroll (number higher than zero). */
	scrollSpeed: 1,
	/* scrollSeparator: String to append between scrolling song name. */
	scrollSeparator: '&nbsp;&#42;&#42;&#42;&nbsp;',
	
	/* mediaTimeSeparator: String between current and total song time. */
	mediaTimeSeparator: '&nbsp;-&nbsp;',
	
	/* useVolumeTooltip: true/false. use tooltip over volume seekbar */
	useVolumeTooltip: true,
	
	/* useSeekbarTooltip: true/false. use tooltip over progress seekbar */
	useSeekbarTooltip: true,
	/* seekTooltipSeparator: String between current and total song position, for progress tooltip. */
	seekTooltipSeparator: '&nbsp;/&nbsp;',
	
	/* defaultArtistData: Default text for song media name. */
	defaultArtistData: 'Artist&nbsp;Name&nbsp;-&nbsp;Artist&nbsp;Title',
	
	/* useBtnRollovers: true/false. Use rollovers on buttons */
	useBtnRollovers: false,
	/* buttonsUrl: url of the buttons for normal and rollover state */
	buttonsUrl: {prev: 'media/data/icons/set3/prev.png', prevOn: 'media/data/icons/set3/prev_on.png', 
				 next: 'media/data/icons/set3/next.png', nextOn: 'media/data/icons/set3/next_on.png', 
				 pause: 'media/data/icons/set3/pause.png', pauseOn: 'media/data/icons/set3/pause_on.png',
				 play: 'media/data/icons/set3/play.png', playOn: 'media/data/icons/set3/play_on.png',
				 volume: 'media/data/icons/set3/volume.png', volumeOn: 'media/data/icons/set3/volume_on.png', 
				 mute: 'media/data/icons/set3/mute.png', muteOn: 'media/data/icons/set3/mute_on.png', 
				 download: 'media/data/icons/set3/download.png', downloadOn: 'media/data/icons/set3/download_on.png',
				 loop: 'media/data/icons/set3/loop.png', loopOn: 'media/data/icons/set3/loop_on.png',
				 shuffle: 'media/data/icons/set3/shuffle.png', shuffleOn: 'media/data/icons/set3/shuffle_on.png',
				 trackUrlIcon: 'media/data/url.png',
				 trackDownloadIcon: 'media/data/dlink.png',
				 trackRemoveIcon: 'media/data/remove.png',
				 link_play: 'media/data/link_play.png', link_pause: 'media/data/link_pause.png'},
				 
	/* useAlertMessaging: true/false. Alert error messages to user */
	useAlertMessaging: true,
	
	/* activatePlaylistScroll: true/false. activate jScrollPane. */
	activatePlaylistScroll: false,
	/* playlistScrollOrientation: vertical/horizontal. */
	playlistScrollOrientation: 'vertical',
	
	/* sortablePlaylistItems: true/false. Make playlist items sortable */
	sortablePlaylistItems: false,
	/* useRemoveBtnInTracks: true/false. Create remove buttons in playlist items for removing tracks. */
	useRemoveBtnInTracks: false,
	
	/* autoReuseMailForDownload: true/false. download backup for ios, save email after client first enters email address and auto send all emails to the same address */
	autoReuseMailForDownload: true,
	
	/* useKeyboardNavigation: false/false. Use keyboard navigation for music (space=toggle audio, left arrow=previous media, right arrow=next media, m=toggle volume) */
	useKeyboardNavigation: false,
	
	/* getTrackInfoFromID3: false/false. Get track info from id3 tags (title, artist, album, artwork) */
	getTrackInfoFromID3: false,
	
	ytAppId:'',/* youtube api key */
};






/* START DEMO EXAMPLE CODE WITH BACKGROUND SLIDESHOW */

var imgArr=['media/bg_slideshow/01.jpg','media/bg_slideshow/02.jpg','media/bg_slideshow/03.jpg','media/bg_slideshow/04.jpg','media/bg_slideshow/05.jpg'], counter=0, slideHolder, prevImage, currentImage, slideshowTimeoutID, slideshowTimeout = 3000, originalWidth, originalHeight, slideShowInited = false, slideShowStarted, windowResizeIntervalID,  windowResizeInterval = 150;

function loadImage(){
   imageLoaded=false;//reset

   var url = imgArr[counter], 
   img = jQuery(new Image()).appendTo(slideHolder).css({
	  display: 'block',
	  position: 'absolute',
	  opacity: 0
   }).load(function() {
		originalWidth=this.width;
		originalHeight=this.height;  
		nextImage = jQuery(this);
		setImage();
   }).error(function(e) {
		//console.log("error " + e);
   }).attr('src', url);
}

function setImage(){
   
   if(currentImage) prevImage = currentImage;	
   currentImage = nextImage;	
   
   var w1 = getComponentSize('w'),
   h1 = getComponentSize('h'), 
   w = originalWidth, 
   h = originalHeight,
   obj = retrieveObjectRatio(slideHolder, w, h, false);
   
   w = obj.width;			
   h = obj.height;
   
   currentImage.css({
	   width: w+'px',
	   height: h+'px',
	   left: w1/2-w/2 + 'px',
	   top: h1/2-h/2 + 'px'
   }); 
   
   if(prevImage)prevImage.stop().animate({opacity: 0}, 1500, "easeOutSine");
   currentImage.stop().animate({opacity: 1}, 1500, "easeOutSine", imageOn);
}

function checkImage(){
   if(!currentImage || !originalWidth || !originalHeight)return false;
   
   var w1 = getComponentSize('w'),
   h1 = getComponentSize('h'), 
   w = originalWidth, 
   h = originalHeight,
   obj = retrieveObjectRatio(slideHolder, w, h, false);
   
   w = obj.width;			
   h = obj.height;
   
   currentImage.css({
	   width: w+'px',
	   height: h+'px',
	   left: w1/2-w/2 + 'px',
	   top: h1/2-h/2 + 'px'
   }); 
}


function imageOn(){
   if(prevImage){
	  prevImage.remove();//remove previous image
	  prevImage=null;
   }
   if(slideshowTimeoutID) clearTimeout(slideshowTimeoutID);
   
   if(slideShowInited){
	  slideshowTimeoutID = setTimeout(nextSlide, slideshowTimeout); 
   }else{
	  var interval = setInterval(function(){
	  if(hap_players[0].getSetupDone()){
			 if(interval) clearInterval(interval);
			 
			 if(isMobile || hap_settings.autoPlay == false){
				 //show play btn
				 var big_play = jQuery('#big_play').css({opacity:0, display:'block', cursor: 'pointer'}).stop().animate({opacity: 1}, 500, 'easeOutSine').bind('click', function(){
					 api_toggleAudio(hap_players[0]);//needs to be instead of play!
					 startSlideshow(); 
					 big_play.stop().animate({opacity: 0}, 300, 'easeOutExpo', function(){
						 big_play.remove();//remove play btn
					 });
					 return false;
				 });
			 }else{
				jQuery('#big_play').remove();//remove play btn
				startSlideshow(); 
			 }
		  }
	  }, 100); 
   }
   slideShowStarted=true;
}

function nextSlide(){
   counter++;
   if(counter>imgArr.length-1)counter=0;
   loadImage();
}

function retrieveObjectRatio( obj, w, h, _fitScreen ) {
		
	var o ={},
	_paddingX = 0,_paddingY = 0,
	objWidth = getComponentSize('w'), objHeight = getComponentSize('h'),
	targetWidth = w, targetHeight = h;
	
	var destinationRatio = (objWidth - _paddingX) / (objHeight - _paddingY);///destination ratio of an object
	var targetRatio = targetWidth / targetHeight;///target ratio of an object

	if (targetRatio < destinationRatio) {
		//console.log('targetRatio < destinationRatio 1');
		if (!_fitScreen) {//fullscreen
			o.height = ((objWidth - _paddingX) / targetWidth) * targetHeight;
			o.width = (objWidth - _paddingX);
		} else {//fitscreen
			o.width = ((objHeight - _paddingY) / targetHeight) * targetWidth;
			o.height = (objHeight - _paddingY);
		}
	} else if (targetRatio > destinationRatio) {
		//console.log('targetRatio > destinationRatio 2');
		if (_fitScreen) {//fitscreen
			o.height = ((objWidth - _paddingX) / targetWidth) * targetHeight;
			o.width = (objWidth - _paddingX);
		} else {//fullscreen
			o.width = ((objHeight - _paddingY) / targetHeight) * targetWidth;
			o.height = (objHeight - _paddingY);
		}
	} else {//fitscreen & fullscreen
		o.width = (objWidth - _paddingX);
		o.height = (objHeight - _paddingY);
	}
	return o;
}

function getComponentSize(side){
	if(side=='w'){
		return slideHolder.width();
	}else{
		return slideHolder.height();
	}
};

function startSlideshow(){
    if(slideshowTimeoutID) clearTimeout(slideshowTimeoutID);
    slideshowTimeoutID = setTimeout(nextSlide, slideshowTimeout);
	
	jQuery('#componentWrapper').find('.player_progress').css({left:0+'px', opacity:0, display:'block'}).animate({opacity: 1}, 500, 'easeOutSine');
	jQuery('#componentWrapper').find('.player_controls').css({opacity:0, display:'block'}).animate({opacity: 1}, 500, 'easeOutSine');
	
	slideShowInited = true;
};

$(window).resize(function() {
	 if(!slideShowStarted) return false;
	 if(windowResizeIntervalID) clearTimeout(windowResizeIntervalID);
	 windowResizeIntervalID = setTimeout(_doneResizing, windowResizeInterval);
});
function _doneResizing(){
	checkImage();
}
	
/* END DEMO EXAMPLE CODE WITH BACKGROUND SLIDESHOW */	


/* START PLAYER INIT */

var hap_player1, hap_players = [hap_player1];
jQuery(document).ready(function($) {
	jsReady = true;
		
	var dataArr = [{holder: $('#componentWrapper'), settings:hap_settings}];
			
	checkFlash(dataArr);	
	
	slideHolder= $('#slideHolder');
	
	//init component
	hap_players[0] = $('#componentWrapper').html5audio(hap_settings);
	
	
});
		
/* END PLAYER INIT */