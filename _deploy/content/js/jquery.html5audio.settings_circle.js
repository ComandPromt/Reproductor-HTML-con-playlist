// SETTINGS

var hap_settings = {
	/* useOnlyMp3Format: true/false (set to true, and on browsers than do not support mp3, flash will be used to play mp3. Also set to true if you plan on using podcast, soundcloud, youtube, ofm) */
	useOnlyMp3Format: true,
	/* sound_id: unique string for player identification (if multiple player instances were used, then strings need to be different!) */
	sound_id: 'circle_slideshow',
	
	/* playlistList: dom elements which holds list of playlists */
	playlistList: '#playlist_list',
	/* activePlaylist: set active playlist that will be loaded on beginning. 
	param1: hidden (boolean) true/false (visible/hidden playlist)
	param2: id (pass element 'id' from the dom)
	Leave empty for no playlist loaded at start like this: activePlaylist: '' */
	activePlaylist: {hidden: false, id: '#playlist1'},
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
	playlistItemContent: 'title',
	/* useNumbersInPlaylist: true/false. Prepend numbers in playlist items. */
	useNumbersInPlaylist: true,
	/* titleSeparator: String to append between song number and title. */
	titleSeparator: '.&nbsp;',
	
	/* autoSetSongTitle: true/false. Auto set song title in 'player_mediaName'. */
	autoSetSongTitle: true,
	
	/* useSongNameScroll: true/false. Use song name scrolling. */
	useSongNameScroll: true,
	/* scrollSpeed: speed of the scroll (number higher than zero). */
	scrollSpeed: 1,
	/* scrollSeparator: String to append between scrolling song name. */
	scrollSeparator: '&nbsp;&#42;&#42;&#42;&nbsp;',
	
	/* mediaTimeSeparator: String between current and total song time. */
	mediaTimeSeparator: '',
	
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
	buttonsUrl: {prev: 'media/data/icons/set2/prev.png', prevOn: 'media/data/icons/set2/prev_on.png', 
				 next: 'media/data/icons/set2/next.png', nextOn: 'media/data/icons/set2/next_on.png', 
				 pause: 'media/data/icons/set2/pause.png', pauseOn: 'media/data/icons/set2/pause_on.png',
				 play: 'media/data/icons/set2/play.png', playOn: 'media/data/icons/set2/play_on.png',
				 volume: 'media/data/icons/set2/volume.png', volumeOn: 'media/data/icons/set2/volume_on.png', 
				 mute: 'media/data/icons/set2/mute.png', muteOn: 'media/data/icons/set2/mute_on.png', 
				 download: 'media/data/icons/set2/download.png', downloadOn: 'media/data/icons/set2/download_on.png',
				 loop: 'media/data/icons/set2/loop.png', loopOn: 'media/data/icons/set2/loop_on.png',
				 shuffle: 'media/data/icons/set2/shuffle.png', shuffleOn: 'media/data/icons/set2/shuffle_on.png',
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

var imgArr=['media/slideshow/01.jpg','media/slideshow/02.jpg','media/slideshow/03.jpg','media/slideshow/04.jpg'], counter=0, wrapper, slideHolder, circlePlayer, prevImage, currentImage, imageOnOffSpeed=1500, imageOnOffEase="easeOutSine", slideshowOn = true, slideshowTimeoutID, slideshowDelay = 3000, slide_timer, sl_startTime, sl_passedTime, sl_delay, transitionOn, offOpacity, onOpacity;

function loadImage(){
	 
   transitionOn = true;	
   imageLoaded=false;//reset

   slide_timer.stop().css('width', 0+'px');

   var url = imgArr[counter],
   img = jQuery(new Image()).prependTo(slideHolder).css({
	  display: 'block',
	  position: 'absolute',
	  opacity: 0
   }).load(function() {
		nextImage = jQuery(this);
		setImage();
   }).error(function(e) {
		//console.log("error " + e);
   }).attr('src', url);
}

function setImage(){
   if(currentImage) prevImage = currentImage;	
   currentImage = nextImage;
   if(prevImage)prevImage.stop().animate({opacity: 0}, imageOnOffSpeed, imageOnOffEase);
   currentImage.stop().animate({opacity: 1}, imageOnOffSpeed, imageOnOffEase, imageOn);
}

function imageOn(){
   if(prevImage){
	  prevImage.remove();//remove previous image
	  prevImage=null;
   }
   transitionOn = false;	
   
   sl_delay = slideshowDelay;
   
   if(!isMobile){
	  if(jQuery('#wrapper:hover').length == 0)startSlideshowTimer(); 
   }else{
	  startSlideshowTimer(); 
   }
}

function nextSlide(){
	//console.log('nextSlide');
	stopSlideshowTimer();
	counter++;
	if(counter>imgArr.length-1)counter=0;
	loadImage();
}

function previousSlide(){
	//console.log('previousSlide');
	stopSlideshowTimer();
	counter--;
	if(counter<0)counter=imgArr.length-1;
	loadImage();
}

function stopSlideshowTimer(){
	//console.log('stopSlideshowTimer');
	if(slideshowTimeoutID) clearTimeout(slideshowTimeoutID);
	slide_timer.stop();
	sl_passedTime = (new Date().getTime() - sl_startTime);
	sl_delay -= sl_passedTime;
	//console.log('remaining: ', sl_delay);
}
 
function startSlideshowTimer(){
	//console.log('startSlideshowTimer');
	if(transitionOn)return;
	if(slideshowTimeoutID) clearTimeout(slideshowTimeoutID);
	sl_startTime = new Date().getTime();
	slideshowTimeoutID = setTimeout(nextSlide, sl_delay); 
	var w = slideHolder.width();
	slide_timer.stop().animate({width: w+'px'}, {duration: sl_delay, easing: 'linear'});
}

function toggleSlideshow(state){
	//console.log('toggleSlideshow');
	if(state){//start
		if(!transitionOn){//otherwise its going to be triggered from end transition
			startSlideshowTimer();
		}
	}else{//stop
		stopSlideshowTimer();
	}
}

function swipeHandler(direction){
	//console.log(direction);
	if(transitionOn) return;
	if(direction == 'right'){
		previousSlide();
	}else if(direction == 'left'){
		nextSlide();
	}
	return false;
}

function overComponent(e) {
	//console.log('overComponent');
	if (!e) var e = window.event;
	if(e.cancelBubble) e.cancelBubble = true;
	else if (e.stopPropagation) e.stopPropagation();
	toggleSlideshow(false);
	circlePlayer.stop().animate({opacity: onOpacity}, 500);
	return false;
}

function outComponent(e) {
	//console.log('outComponent');
	if (!e) var e = window.event;
	if(e.cancelBubble) e.cancelBubble = true;
	else if (e.stopPropagation) e.stopPropagation();
	if(slideshowOn)toggleSlideshow(true);
	circlePlayer.stop().animate({opacity: offOpacity}, 500);
	return false;
}

/* END DEMO EXAMPLE CODE WITH BACKGROUND SLIDESHOW */
		


/* START PLAYER INIT */

var hap_player1, hap_players = [hap_player1];
jQuery(document).ready(function($) {
	jsReady = true;
		
	var dataArr = [{holder: $('#componentWrapper'), settings:hap_settings}];
			
	checkFlash(dataArr, true);	
	
	//slideshow vars
	slideHolder = $('.slideHolder').bind("dragstart", function(e) { e.preventDefault(); return false; }).bind("selectstart", function(e) { e.preventDefault(); return false; }).touchSwipe(swipeHandler, true);
	circlePlayer = $('.circlePlayer');
	slide_timer = $('.slide_timer').css({opacity: 0.5, zIndex:100});
	wrapper = $('#wrapper');	
	if(!isMobile)wrapper.bind('mouseenter', overComponent).bind('mouseleave', outComponent);	
	offOpacity = parseFloat(circlePlayer.attr('data-offOpacity'),10);
	onOpacity = parseFloat(circlePlayer.attr('data-onOpacity'),10);
	if(isMobile)offOpacity=onOpacity=1;
	circlePlayer.css('opacity', offOpacity);
	
	//init component
	hap_players[0] = $('#componentWrapper').html5audio(hap_settings);
	
});

/* END PLAYER INIT */