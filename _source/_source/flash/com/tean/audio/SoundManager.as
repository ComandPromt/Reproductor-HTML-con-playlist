

/*
		
		3 commands to start loading sound:
		newSound();
		addListeners();
		playSoundChannel();
		
		
		load () method 
		Initiates loading of an external MP3 file from the specified URL. If you provide a valid URLRequest object to the Sound constructor, the constructor calls Sound.load() for you. 
		You only need to call Sound.load() yourself if you don't pass a valid URLRequest object to the Sound constructor or you pass a null value. 
		Once load() is called on a Sound object, you can't later load a different sound file into that Sound object. To load a different sound file, create a new Sound object.
		
		close(); method
		Closes the stream, causing any download of data to cease. No data may be read from the stream after the close() method is called. 
		
		*/

package com.tean.audio{
	
	/**
	* ...
	* @author tean
	*/
	
	import flash.events.*;
	import flash.media.*;
    import flash.net.*;
	import flash.external.ExternalInterface;
	
	public class SoundManager extends EventDispatcher{
		
		private var _soundTransform:SoundTransform;
		private var _soundChannel:SoundChannel;
		private var _sound:Sound;
		private var _soundLoaderContext:SoundLoaderContext;
		private var _checkPolicyFile:Boolean;
		private var _bufferTime:int;
		
		public static const SOUND_END:String = "SOUND_END";
		
		public function SoundManager(audioBufferTime:int) {
			
			_soundTransform = new SoundTransform(0, 0);//SoundTransform(vol:Number = 1, panning:Number = 0) -> default values
			_soundLoaderContext = new SoundLoaderContext(audioBufferTime, _checkPolicyFile);//we need to do this after we recieve _bufferTime!
			
		}
		
		public function addListeners():void {
			if(_sound){
				_sound.addEventListener(Event.OPEN, openHandler, false, 0, true);//dispathed when the loading begins
				_sound.addEventListener(ProgressEvent.PROGRESS, progressHandler, false, 0, true);
				_sound.addEventListener(Event.COMPLETE, completeHandler, false, 0, true);
				_sound.addEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler, false, 0, true);
				_sound.addEventListener(Event.ID3, id3Handler, false, 0, true);//when id3 metadata becomes available
			}
		}
		
		public function removeListeners():void {
			if(_sound){
				_sound.removeEventListener(Event.OPEN, openHandler);
				_sound.removeEventListener(ProgressEvent.PROGRESS, progressHandler);
				_sound.removeEventListener(Event.COMPLETE, completeHandler);//on loading complete
				_sound.removeEventListener(IOErrorEvent.IO_ERROR, ioErrorHandler);
				_sound.removeEventListener(Event.ID3, id3Handler);
			}
		}
		
		private function openHandler(e:Event):void {
			//trace("openHandler: " + e);
		}
		
		private function completeHandler(e:Event):void {
			//trace("completeHandler: " + e);
			removeListeners();
		}
		
		private function id3Handler(e:Event):void {
			
			/*if(!SoundMixer.areSoundsInaccessible()){
				
				var s:Sound = Sound(e.target);
				try{
					var id3Prop:ID3Info = ID3Info(s.id3);
				}catch(er:Error){
					trace(er);	
				}
				for (var i in id3Prop){
					trace("ID3 - "+ i +" is " + id3Prop[i]);
				}
			}*/
		}
		
		private function ioErrorHandler(e:IOErrorEvent):void {
			trace("ioErrorHandler: " + e);
		}
		
		private function progressHandler(e:ProgressEvent):void {}
		
		public function newSound( url:String ):void {
			try{
				_sound = new Sound(new URLRequest(url), _soundLoaderContext);
			}catch(er:Error){trace(er);}
		}
		
		public function playSoundChannel(from:int = 0):void {
			try{
				_soundChannel = _sound.play(from);//we preserve each sound as a discrete entity by asigning it to a channel.
				_soundChannel.addEventListener(Event.SOUND_COMPLETE, onSoundComplete, false, 0, true);//we need to add the listener every time because its the new instance of _soundChannel (and also remove it later.)
			}catch(er:Error){trace(er);}
		}
		
		public function stopSoundChannel():void {
			if(!_soundChannel) return;
			try{
				_soundChannel.stop();//it will keep channel opened and sound loading into memory but loading another sound file will replace it.
				_soundChannel.removeEventListener(Event.SOUND_COMPLETE, onSoundComplete);
			}catch(er:Error){trace(er);}
		}
		
		private function onSoundComplete(e:Event):void {
			//trace("sound complete");
			dispatchEvent(new Event(SoundManager.SOUND_END));
		}
		
		public function setVolume(v:Number):void {
			if (v > 1) v = 1;
			else if (v < 0) v = 0;
			
			_soundTransform.volume = v;
			if(_soundChannel)_soundChannel.soundTransform = _soundTransform;
			// if (ExternalInterface.available)  ExternalInterface.call("console.log", "_soundTransform.volume = ",  _soundTransform.volume);
		}
		
		public function getVolume():Number {
			return _soundTransform.volume;
		}
		
		public function setPan(pan:int):void {
			try{
				if(pan>1 || pan<-1) return;
				_soundTransform.pan = pan;
				_soundChannel.soundTransform = _soundTransform;
			}catch(er:Error){trace(er);}
		}
		
		public function getSound():Sound {
			return _sound;
		}
		
		public function getSoundChannel():SoundChannel {
			return _soundChannel;
		}
		
		public function setBufferTime(val:int):void{
			_bufferTime = val;
		}
		
		public function disposeSoundAndChannel():void {
			if(_sound) _sound = null;
			if(_soundChannel) _soundChannel = null;
		}
		
		public function dispose():void {
		
			if(_sound) removeListeners();
		
			stopSoundChannel();
			disposeSoundAndChannel();
			
			if(_soundTransform) _soundTransform = null;
			if(_soundLoaderContext) _soundLoaderContext = null;
		}
	}
}
	
		
