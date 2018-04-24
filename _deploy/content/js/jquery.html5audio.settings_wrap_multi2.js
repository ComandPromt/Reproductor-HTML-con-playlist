
// SETTINGS

var hap_settings = {
	/* useOnlyMp3Format: true/false (set to true, and on browsers than do not support mp3, flash will be used to play mp3. Also set to true if you plan on using podcast, soundcloud, youtube, ofm) */
	useOnlyMp3Format: true,
	/* sound_id: unique string for player identification (if multiple player instances were used, then strings need to be different!) */
	sound_id: 'wrap_multi2_selector',
	
	/* playlistList: dom elements which holds list of playlists */
	playlistList: '#playlist_list',
	/* activePlaylist: set active playlist that will be loaded on beginning. 
	param1: hidden (boolean) true/false (visible/hidden playlist)
	param2: id (pass element 'id' from the dom)
	Leave empty for no playlist loaded at start like this: activePlaylist: '' */
	activePlaylist: {hidden: false, id: '#playlist1'},
	/* activeItem: active item to start with when playlist is loaded (0 = first, 1 = second, 2 = third... -1 = none) */
	activeItem: -1,
	
	/* autoOpenPlayerInPopup: true/false. Auto open player in popup (removes player in parent window when player in popup opens) */
	autoOpenPlayerInPopup: false,
	/* autoUpdateWindowData: true/false. Auto update data between parent window and popup window (current (last) playlist, active item, last volume) */
	autoUpdateWindowData: true,
	
	/* soundcloudApiKey: If you want to use SoundCloud music, register you own api key here for free: 
	'http://soundcloud.com/you/apps/new' and enter Client ID */
	soundcloudApiKey: '',
	/* soundcloud_result_limit: max number of results to retrieve from soundcloud. BEWARE! Some results may contain thousands of songs so keep this in mind!! */
	soundcloud_result_limit: 4,
	
	/* podcast_result_limit: max number of results to retrieve from podcast. 250 = max possible results by google api feed. */
	podcast_result_limit: 4,
	/* yt_playlist_result_limit: max number of results to retrieve from youtube playlist. 200 = max amount youtube playlist can have. */
	yt_playlist_result_limit: 4,
	/* ofm_result_limit: max number of results to retrieve from official.fm. */
	ofm_result_limit: 4,

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
	buttonsUrl: {prev: 'media/data/icons/set1/prev.png', prevOn: 'media/data/icons/set1/prev_on.png', 
				 next: 'media/data/icons/set1/next.png', nextOn: 'media/data/icons/set1/next_on.png', 
				 pause: 'media/data/icons/set1/pause.png', pauseOn: 'media/data/icons/set1/pause_on.png',
				 play: 'media/data/icons/set1/play.png', playOn: 'media/data/icons/set1/play_on.png',
				 volume: 'media/data/icons/set1/volume.png', volumeOn: 'media/data/icons/set1/volume_on.png', 
				 mute: 'media/data/icons/set1/mute.png', muteOn: 'media/data/icons/set1/mute_on.png', 
				 download: 'media/data/icons/set1/download.png', downloadOn: 'media/data/icons/set1/download_on.png',
				 loop: 'media/data/icons/set1/loop.png', loopOn: 'media/data/icons/set1/loop_on.png',
				 shuffle: 'media/data/icons/set1/shuffle.png', shuffleOn: 'media/data/icons/set1/shuffle_on.png',
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
	
	/* getTrackInfoFromID3: false/false. Get track info from id3 tags (title, artist, album, artwork) */
	getTrackInfoFromID3: false,
	
	ytAppId:'',/* youtube api key */
};

var hap_settings2 = {
	/* useOnlyMp3Format: true/false (set to true, and on browsers than do not support mp3, flash will be used to play mp3. Also set to true if you plan on using podcast, soundcloud, youtube, ofm) */
	useOnlyMp3Format: true,
	/* sound_id: unique string for player identification (if multiple player instances were used, then strings need to be different!) */
	sound_id: 'wrap_multi2_players',
	
	/* playlistList: dom elements which holds list of playlists */
	playlistList: '#playlist_list',
	/* activePlaylist: set active playlist that will be loaded on beginning. 
	param1: hidden (boolean) true/false (visible/hidden playlist)
	param2: id (pass element 'id' from the dom)
	Leave empty for no playlist loaded at start like this: activePlaylist: '' */
	activePlaylist: '',
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
	buttonsUrl: {prev: 'media/data/icons/set2/prev.png', prevOn: 'media/data/icons/set2/prev_on.png', 
				 next: 'media/data/icons/set2/next.png', nextOn: 'media/data/icons/set2/next_on.png', 
				 pause: 'media/data/icons/set2/pause.png', pauseOn: 'media/data/icons/set2/pause_on.png',
				 play: 'media/data/icons/set2/play.png', playOn: 'media/data/icons/set2/play_on.png',
				 volume: 'media/data/icons/set2/volume.png', volumeOn: 'media/data/icons/set2/volume_on.png', 
				 mute: 'media/data/icons/set2/mute.png', muteOn: 'media/data/icons/set2/mute_on.png', 
				 download: 'media/data/icons/set2/download.png', downloadOn: 'media/data/icons/set2/download_on.png',
				 loop: 'media/data/icons/set2/loop.png', loopOn: 'media/data/icons/set2/loop_on.png',
				 shuffle: 'media/data/icons/set2/shuffle.png', shuffleOn: 'media/data/icons/set2/shuffle_on.png',
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
	
	/* getTrackInfoFromID3: false/false. Get track info from id3 tags (title, artist, album, artwork) */
	getTrackInfoFromID3: false,
	
	ytAppId:'',/* youtube api key */
};




/* START PLAYER INIT */

var hap_group = 'wrap_multi2', hap_player1, hap_players, soundArr, yt_init;
jQuery(document).ready(function($) {
	jsReady = true;
	
	var i = 0, len = 1, dataArr = [{holder: $('#componentWrapper'), settings:hap_settings}];
			
	if(!html5Support){//flash movies
			
		for(i;i<len;i++){
			
			var a_id = 'flashAudio_' + i;//underscore (_) because id has to be different than below in makeHapPlayers!!
			var f_id = 'flashMain_' + i;
			var c_id = 'circleMain_' + i;
			
			dataArr[i].settings.flash_id = i;
			dataArr[i].settings.flashAudio = '#'+a_id;
			dataArr[i].settings.flashYoutube = '#'+f_id;
			dataArr[i].settings.circleMain = '#'+c_id;
			
			var flashAudioWrapper = $('<div/>').addClass('flashAudio');
			var flashAudio = $("<div id='"+a_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(flashAudioWrapper);
			
			var flashMainWrapper = $('<div/>').addClass('flashMain');
			var flashMain = $("<div id='"+f_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(flashMainWrapper);
			
			var flashCircleWrapper = $('<div/>').addClass('circleMain');
			var flashCircle = $("<div id='"+c_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'/></a></div>").appendTo(flashCircleWrapper);
			
			dataArr[i].holder.append(flashAudioWrapper);
			dataArr[i].holder.append(flashMainWrapper);
			//dataArr[i].holder.find('div[class=circlePlayer]').append(flashCircleWrapper);
				
		}
	}else{
		if(!mp3Support){//use flash to play mp3 on browsers that do not support mp3 
			i = 0;
			for(i;i<len;i++){
				
				var a_id = 'flashAudio_' + i;
				
				dataArr[i].settings.flash_id = i;
				dataArr[i].settings.flashAudio = '#'+a_id;
				
				var flashAudioWrapper = $('<div/>').addClass('flashAudio');
				var flashAudio = $("<div id='"+a_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(flashAudioWrapper);
				
				dataArr[i].holder.append(flashAudioWrapper);
					
			}
		}
	}	
			
	//init playlist selector
	hap_player1 = $('#componentWrapper').html5audio(hap_settings);
		
	//playlist selector dropdown
	if($("#hap_playlist").length){
		if(!isMobile && !ieBelow8){
			//http://www.bulgaria-web-developers.com/projects/javascript/selectbox/
			$("#hap_playlist").selectbox({
				onChange: function (val, inst) {
					//console.log(val, inst);
					$("#hap_playlist").selectbox("disable");
					api_loadPlaylist(hap_player1, {hidden: false, id: '#'+val});
				}
			});
		}else{//we want default mobile scroll on selectbox
			$('#hap_playlist').change(function() {
				$("#hap_playlist").selectbox("disable");
				var val = $(this).val();
				api_loadPlaylist(hap_player1, {hidden: false, id: '#'+val});
			});
		}
		$(".sbHolder").css('zIndex',9999);
	}
	
});

function makeHapPlayers(instance){

	//console.log('makeHapPlayers');
	//get playlist items loaded into playlist selector, and make individual players out of them
	soundArr = [], hap_players= [];//reset
	
	var orig_component = jQuery('.componentWrapper'), i = 0;
	
	jQuery(instance).find('.playlistItem').each(function(){
		//console.log(jQuery(this));
		
		//clone component
		var _item = jQuery(this), component = orig_component.clone(true,true).css({
			position:'relative',
			width:100+'%', 
			height:40+'px',
			left:0+'px', 
			bottom:40+'px'
		}).appendTo(_item);
		_item.data('hap_wrap_player', component);//for destroyPlaylist call the playlist after we remove parent containers!
		
		//clone settings
		var settings = jQuery.extend(true, {}, hap_settings2);
		
		//we dont call checkFlash here! - this needs to happen before we init component below and all instances need to be checked at once!
		if(!html5Support){//flash movies
				
			var a_id = 'flashAudio' + i;
			var f_id = 'flashMain' + i;
			var c_id = 'circleMain' + i;
			
			settings.flash_id = i;
			settings.flashAudio = '#'+a_id;
			settings.flashYoutube = '#'+f_id;
			settings.circleMain = '#'+c_id;
			
			var flashAudioWrapper = jQuery('<div/>').addClass('flashAudio');
			var flashAudio = jQuery("<div id='"+a_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(flashAudioWrapper);
			
			var flashMainWrapper = jQuery('<div/>').addClass('flashMain');
			var flashMain = jQuery("<div id='"+f_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(flashMainWrapper);
			
			var flashCircleWrapper = jQuery('<div/>').addClass('circleMain');
			var flashCircle = jQuery("<div id='"+c_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'/></a></div>").appendTo(flashCircleWrapper);
			
			component.append(flashAudioWrapper);
			component.append(flashMainWrapper);
			//component.find('div[class=circlePlayer]').append(flashCircleWrapper);
					
		}else{
			if(!mp3Support){//use flash to play mp3 on browsers that do not support mp3 
					
				var a_id = 'flashAudio' + i;
				
				settings.flash_id = i;
				settings.flashAudio = '#'+a_id;
				
				var flashAudioWrapper = jQuery('<div/>').addClass('flashAudio');
				var flashAudio = jQuery("<div id='"+a_id+"'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(flashAudioWrapper);
				
				component.append(flashAudioWrapper);
						
			}
		}	
		
		settings.sound_id = 'wrap_multi2' + i;//needs to be different so we can differentiate them!
		
		var player = component.html5audio(settings);
		hap_players.push(player);	
		
		//sound array for controlling multiple sound instances (pause one when other starts)
		soundArr.push({player_id: hap_players[i], sound_id: settings.sound_id});
		
		i++;
		
	}).find('a[class=playlistNonSelected]').css('cursor', 'default').click(function(){return false;});
	
	//orig_component.remove();
	//orig_component=null;
	
	//make draggable 
	jQuery('#componentWrapper').find(".hap_draggable").draggable({
		start: function( event, ui ) {//put draggable on top
			jQuery('.hap_draggable').each(function(){
				jQuery(this).css('zIndex', 0);//reset all
			});
			jQuery(this).css('zIndex', 1);//active on top
		}
	});
	
	jQuery("#hap_playlist").selectbox("enable");
	
}
		
/* END PLAYER INIT */