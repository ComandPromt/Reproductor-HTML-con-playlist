
package {
	 
	import flash.display.*;
	import flash.events.*;
	import flash.utils.*;
	import flash.media.*;
	import flash.net.*;
	import flash.ui.*;
	import flash.utils.*;
	import flash.system.*;
	
	import flash.external.ExternalInterface;
	
	import com.tean.audio.*;
	
	public class Audio extends Sprite{
		
		private var readyTimer:Timer;
		private var soundManager:SoundManager;
		private var volume:Number = 0;
		private var lastVolume:Number;
		private var muteOn:Boolean;
		private var mediaPlaying:Boolean;
		private var mediaScrubbing:Boolean;
		private var volumeSliding:Boolean
		private var pausePosition:Number;
		private var randomPlay:Boolean;		
		private var loopingOn:Boolean;	
		private var autoPlay:Boolean;
		private var soundUrl:String;
		private var flashId:String;
		private var startCall:Boolean;
		
		public function Audio() {
           if (stage) {
				init();
			} else {
				addEventListener(Event.ADDED_TO_STAGE, init);
			}
		}
			
		private function init(event:Event = null):void {
			if (event) {
				removeEventListener(Event.ADDED_TO_STAGE, init);
			}
			addEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler);
			
			var bufferTime:int = 1000;//in miliseconds
			soundManager = new SoundManager(bufferTime);
			soundManager.addEventListener(SoundManager.SOUND_END, onMediaEnd);
			
			if (ExternalInterface.available){
				try	{
					if (checkJavaScriptReady())		{
						setup();
					}else	{
						readyTimer = new Timer(100,0);
						readyTimer.addEventListener(TimerEvent.TIMER, timerHandler);
						readyTimer.start();
					}
				}catch (error:SecurityError)	{
				}
				catch (error:Error)	{
				}
			}
			else{
			}
		}
		
		private function checkJavaScriptReady():Boolean{
			var isReady:Boolean = ExternalInterface.call("hap_domReady");
			return isReady;
		}
		
		private function timerHandler(e:TimerEvent):void{
			var isReady:Boolean = checkJavaScriptReady();
			if (isReady)	{
				readyTimer.stop();
				readyTimer.removeEventListener(TimerEvent.TIMER, timerHandler);
				readyTimer = null;
				setup();
			}
		}
		
		private function setup():void {
			if(ExternalInterface.available){
				ExternalInterface.addCallback("hap_fa_setData", hap_fa_setData);
				ExternalInterface.addCallback("hap_fa_initMedia", hap_fa_initMedia);
				ExternalInterface.addCallback("hap_fa_play", hap_fa_play);
				ExternalInterface.addCallback("hap_fa_pause", hap_fa_pause);
				ExternalInterface.addCallback("hap_fa_togglePlayback", hap_fa_togglePlayback);
				ExternalInterface.addCallback("hap_fa_dispose", hap_fa_dispose);
				ExternalInterface.addCallback("hap_fa_setVolume", hap_fa_setVolume);
				ExternalInterface.addCallback("hap_fa_seek", hap_fa_seek);
				ExternalInterface.addCallback("hap_fa_getDuration", hap_fa_getDuration);
				ExternalInterface.addCallback("hap_fa_getTime", hap_fa_getTime);
				ExternalInterface.addCallback("hap_fa_getLoadPercent", hap_fa_getLoadPercent);
				ExternalInterface.addCallback("hap_fa_setAutoplay", hap_fa_setAutoplay);
				ExternalInterface.addCallback("hap_fa_getMediaPlaying", hap_fa_getMediaPlaying);
			}
		}
		
		//*****************
		
		public function hap_fa_setAutoplay(val):void {
			autoPlay=val;
		}
		
		public function hap_fa_seek(t):void {
			t*=1000;
			if(t > soundManager.getSound().length) t = soundManager.getSound().length;
			soundManager.stopSoundChannel();		
			soundManager.playSoundChannel(t);
			soundManager.setVolume(volume);
			pausePosition = soundManager.getSoundChannel().position;
			if(!mediaPlaying)soundManager.stopSoundChannel();		
		}
		
		public function hap_fa_getMediaPlaying():Boolean {
			return mediaPlaying;
		}
		
		public function hap_fa_initMedia(url:String):void {

			startCall = false;
			soundUrl = url;

			if(soundManager.getSound()) mediaEndAction();

			soundManager.newSound(url);
			soundManager.addListeners();
			soundManager.playSoundChannel();
			soundManager.setVolume(volume);
			mediaPlaying = true;
			
			if(!autoPlay){
				 try{
					  soundManager.stopSoundChannel();
				  }catch(er:Error){}
				mediaPlaying = false;
				if (ExternalInterface.available) ExternalInterface.call("hap_fac_pause", {id: flashId});
			}else{
				if(!startCall){
					if (ExternalInterface.available) ExternalInterface.call("hap_fac_start", {id: flashId});
					startCall=true;
				}
			}
			if (ExternalInterface.available) ExternalInterface.call("hap_fac_loaded_metadata", {id: flashId});
			
			addEventListener(Event.ENTER_FRAME, trackMediaInfo);
			autoPlay=true;

		}
		
		public function hap_fa_play():void {
			if(soundManager.getSoundChannel()){
				 try{
					  soundManager.stopSoundChannel();
					  soundManager.playSoundChannel(pausePosition);
					  soundManager.setVolume(volume);
				  }catch(er:Error){}
				  mediaPlaying = true;
			}else{
				soundManager.newSound(soundUrl);
				soundManager.addListeners();
				soundManager.playSoundChannel();
				soundManager.setVolume(volume);
				mediaPlaying = true;
				addEventListener(Event.ENTER_FRAME, trackMediaInfo);
			}
			if (ExternalInterface.available) ExternalInterface.call("hap_fac_play", {id: flashId});
		}
		
		public function hap_fa_pause():void {
			pausePosition = soundManager.getSoundChannel().position;
			try{
				soundManager.stopSoundChannel();
			}catch(er:Error){}
			mediaPlaying = false;
			if (ExternalInterface.available) ExternalInterface.call("hap_fac_pause", {id: flashId});
		}
		
		public function hap_fa_togglePlayback():void {
			  if(mediaPlaying){
					pausePosition = soundManager.getSoundChannel().position;
					try{
						soundManager.stopSoundChannel();
					}catch(er:Error){}
					mediaPlaying = false;
					if (ExternalInterface.available) ExternalInterface.call("hap_fac_pause", {id: flashId});
			  }else{
				   if(!startCall){
					   if (ExternalInterface.available) ExternalInterface.call("hap_fac_start", {id: flashId});
					   startCall=true;
				   }
				    try{
						soundManager.stopSoundChannel();
						soundManager.playSoundChannel(pausePosition);
						soundManager.setVolume(volume);
					}catch(er:Error){}
					mediaPlaying = true;
					if (ExternalInterface.available) ExternalInterface.call("hap_fac_play", {id: flashId});
			  }
		}
		
		public function hap_fa_setVolume(vol):void {
			if(vol <0) vol = 0;
			else if(vol > 1) vol=1;
			volume = vol;
			soundManager.setVolume(volume);
		}
		
		public function hap_fa_getDuration():Number {
			var duration:Number = 0;
			if(soundManager.getSound()) duration = soundManager.getSound().length/1000;
			return duration;
		}
		
		public function hap_fa_getTime():Number {
			var position:Number = 0;
			if(soundManager.getSoundChannel()) position = soundManager.getSoundChannel().position/1000;
			return position;
		}
		
		public function hap_fa_getLoadPercent():int {
			return soundManager.getSound().bytesLoaded/soundManager.getSound().bytesTotal;
		}
		
		
		public function hap_fa_dispose():void {
			 mediaEndAction();
		}
		
		public function hap_fa_setData(settings:Object):void {
			autoPlay = settings.autoPlay;
			loopingOn =settings.loopingOn;
			volume=settings.volume;
			flashId =settings.flashId;
		}

		//****************

		private function onMediaEnd(e:Event):void {
			if (ExternalInterface.available)  ExternalInterface.call("hap_fac_end", {id: flashId});
		}
		
		private function mediaEndAction():void {
			removeEventListener(Event.ENTER_FRAME, trackMediaInfo);
			soundManager.stopSoundChannel();
			soundManager.removeListeners();
			soundManager.disposeSoundAndChannel();
			pausePosition = 0;
			mediaPlaying = false;
		}
		
		private function trackMediaInfo(e:Event):void {
			var bytesLoaded:Number = soundManager.getSound().bytesLoaded,
			bytesTotal:Number = soundManager.getSound().bytesTotal,
			position:Number = soundManager.getSoundChannel().position/1000,
			duration:Number = soundManager.getSound().length/1000;
			
			if (bytesTotal >= bytesLoaded && bytesLoaded > 0) {
				if (ExternalInterface.available)  ExternalInterface.call("hap_fac_dataUpdate", {id: flashId, bl: bytesLoaded, bt: bytesTotal, t: position, d: duration});
			}
		}
		
		//***************** 
		
		private function removedFromStageHandler(e:Event):void {

			removeEventListener(Event.REMOVED_FROM_STAGE, removedFromStageHandler);
			removeEventListener(Event.ENTER_FRAME, trackMediaInfo);
			
			if(soundManager){
				soundManager.removeEventListener(SoundManager.SOUND_END, onMediaEnd);
				soundManager.dispose();
				soundManager = null;
			}
		}
	}
}