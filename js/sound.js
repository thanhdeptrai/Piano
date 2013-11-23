Sound = {
	initialize: function(audioDescriptor){
		this.audioDescriptor = audioDescriptor;
		this.audioObjects =  {};
		this.sfxChannelId = [];
		this.musicChannelId;
		this.sfxLength = 25;
	},
	playSfx: function(soundId){
		var self = this;
		
		if (soundId<25) {
			var mmm=soundId%5;
			switch(mmm){
				case 0:soundId=(soundId/5>>0)*12+1; break;
				case 1:soundId=(soundId/5>>0)*12+3;break;
				case 2:soundId=(soundId/5>>0)*12+6;break;
				case 3:soundId=(soundId/5>>0)*12+8;break;
				case 4:soundId=(soundId/5>>0)*12+10;break;
			}			
		} else {

			soundId-=25;
			var mmm=soundId%7;
			switch(mmm){
				case 0:soundId=(soundId/7>>0)*12+0; break;
				case 1:soundId=(soundId/7>>0)*12+2;break;
				case 2:soundId=(soundId/7>>0)*12+4;break;
				case 3:soundId=(soundId/7>>0)*12+5;break;
				case 4:soundId=(soundId/7>>0)*12+7;break;
				case 5:soundId=(soundId/7>>0)*12+9;break;
				case 6:soundId=(soundId/7>>0)*12+11;break;
			}
		}
		soundId+=36;
		var delay = 0; // play one note every quarter second
                       
                        var velocity = 127; // how hard the note hits

		MIDI.noteOn(0,soundId, velocity, delay);
		MIDI.noteOff(0, soundId, delay + 75);
	},
	playMusic:function(soundId,endCallback){
		if(this.musicChannelId) this.audioObjects[this.musicChannelId].stop();
		this.musicChannelId = soundId;
		var audio = this.audioObjects[soundId];
		if(endCallback) {			
			audio.loop(false);
			audio._onend = [endCallback];
		}
		else audio.loop(true);
		audio.volume(MUSIC_VOLUME/100);
		audio.play();
		this.setMusicVolume(MUSIC_VOLUME);
		
		
	},
	endSound: function(){
		if(this.musicChannelId) this.audioObjects[this.musicChannelId].stop();
	},
	setSfxVolume: function(value){
		SFX_VOLUME = value;
		for(var i=0;i<this.sfxChannelId.length;i++){
			var audio = this.audioObjects[this.sfxChannelId[i]];
			audio.volume(value/100);
			audio._audioNode[0].volume = value/100;
		}
	},
	setMusicVolume: function(value){
		MUSIC_VOLUME = value;
		var audio = this.audioObjects[this.musicChannelId];
		audio.volume(value/100);
		audio._audioNode[0].volume = (value/100);
	}
}