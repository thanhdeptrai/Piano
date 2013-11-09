var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT  = 600;
var SFX_VOLUME = 100;
var MUSIC_VOLUME = 100;
window.onload = function () {
    var loadedImage = 0;
	var loadedAudio = 0;
	var loadedPercent = 0;
	var loadAudios,loadImages;
    windowLoad();
	function windowLoad(){	
		CAAT.DEBUG = 1;
		var director = new CAAT.Foundation.Director().initialize(CANVAS_WIDTH, CANVAS_HEIGHT, document.getElementById("canvas"));
		var scene = director.createScene();
		var startTime = +new Date();
        var loadActor = new CAAT.Foundation.ActorContainer().setBounds(0,0,director.width,director.height);
		scene.addChild(loadActor);
		loadActor.paint = function(director,time){
			var ctx = director.ctx;
			ctx.fillStyle = "#0F0";
			ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
			ctx.fillStyle = "#0FF";
			ctx.font = "30px Times New Roman";
			ctx.strokeRect(300,200,200,20);
			ctx.fillRect(300,200,200*loadedPercent/100,20)
			ctx.fillText(loadedPercent+"%",300,190);
			//(loadedImage==0)? ctx.fillText("LOADING SOUND...",300,250):ctx.fillText("LOADING IMAGE...",300,250);
			ctx.fillText("LOADING...",300,250);
			if(loadAudios&&loadImages&&(+new Date() - startTime>1000)) {
				run(director,loadImages,loadAudios);
				scene.removeChild(this);
			}
		}
		load();
		CAAT.loop(60);
	}
    function load() {
		
		
		var audioElement = new AudioPreloader();
		for (var i=1;i<62;i++){
			audioElement.addElement("sound"+i,["sound/sound"+i+".mp3","sound/sound"+i+".ogg"]);
		}
			
        var imageElement = new CAAT.Module.Preloader.Preloader().
			addElement("recordButton","img/record-button.png");
		
		var elementLength =audioElement.elements.length + imageElement.elements.length;
		audioElement.load (
		function loadAll(audios){
			loadAudios = audios;
			
		},
		function loadEach(audio){
			loadedAudio++;
			loadedPercent = Math.round((loadedAudio + loadedImage)/elementLength*100);
		});
        imageElement.load(
		function onAllAssetsLoaded(images) {
			loadImages = images;
		},
		function onEachLoad(index){
			loadedImage++;
			loadedPercent = Math.round((loadedAudio + loadedImage)/elementLength*100);
		});
    }
    function run(director,images,audios) {
        director.setImagesCache(images);
		Sound.initialize(audios);
		var scene = director.currentScene;
		
		var whiteKey = [];
		var blackKey = [];
		var whiteKeyLength = 36;
		var blackKeyLength = 25;
		for(var i=0;i<whiteKeyLength;i++){
			var whiteKeyActor = new CAAT.PianoKey().initialize(director,50+20*i,200,20,120,"white",i+blackKeyLength);
			whiteKeyActor._down = function(){
				this.hit();
				playKey(this.keyIndex);
			}
			whiteKeyActor.mouseDown = function(){this._down();}
			whiteKeyActor.touchStart = function(){this._down();}
			whiteKey.push(whiteKeyActor);
			scene.addChild(whiteKeyActor);
		}
		var blackKeyIndex = 0;
		for(var i=0;i<whiteKeyLength-1;i++){
			if((i%7!=2)&&(i%7!=6)){
				var blackKeyActor = new CAAT.PianoKey().initialize(director,63+20*i,200,14,70,"black",blackKeyIndex);
				blackKeyActor._down = function(){
					this.hit();
					playKey(this.keyIndex);
				}
				blackKeyActor.mouseDown = function(){this._down();}
				blackKeyActor.touchStart = function(){this._down();}
				blackKey.push(blackKeyActor);
				scene.addChild(blackKeyActor);
				blackKeyIndex++;
			}
		}
		
		var recording = false;
		var playingRecord = false;
		var recordStartTime = 0;
		var recordData = [];
		var currentRecordIndex = 0;
		var recordImage = new CAAT.SpriteImage().initialize(director.getImage("recordButton"),1,1);
		var recordButton = new CAAT.Button().initialize(director,recordImage,0,0,0,0,function(){
			if(playingRecord) {
				playingRecord = false;
				return;
			}
			if(!recording){
				recording = true;
				recordData = [];
				recordStartTime = scene.time;
			}
			else{
				recording = false;
				if(recordData.length>0){
					currentRecordIndex = 0;
					playingRecord = true;
					recordStartTime = scene.time;
				}
			}
		}).
			setLocation(100,120).
			setScaleAnchored(75/recordImage.singleHeight,100/recordImage.singleWidth,0,0);
		scene.addChild(recordButton);
		
		var clockActor = new CAAT.ActorContainer().setBounds(210,160,100,100);
		clockActor.paint = function(director,time){
			var ctx = director.ctx;
			if(!recording&&!playingRecord) return;
			ctx.fillStyle = "#0FF";
			ctx.font = "25px Times New Roman";
			if(recording){
				var showTime = time - recordStartTime;
			}
			if(playingRecord){
				var remainTime = recordData[recordData.length-1].time + recordStartTime - scene.time;
				var playedTime = recordData[recordData.length-1].time - remainTime;
				if(playedTime>=recordData[currentRecordIndex].time){
					playKey(recordData[currentRecordIndex].keyIndex);
					currentRecordIndex++;
					if(currentRecordIndex==recordData.length) playingRecord = false;
				}
				var showTime = remainTime;
			}
			showTime/=1000;
			var minute = ""+((showTime/60)>>0);
			minute = (minute.length==2)? minute : "0"+minute;
			var second = ""+((showTime%60)>>0);
			second = (second.length==2)? second : "0"+second;
			var timeText = minute +" : "+ second;
			ctx.fillText(timeText,0,0);
		};
		scene.addChild(clockActor);
		
		CAAT.registerKeyListener(
		function event(e){
			if(playingRecord) return;
			if(e.getAction() === "down"){
				var keyIndex;
				for(var i=0;i<keyData.length;i++){
					if((e.getKeyCode() == keyData[i].keyCode)&&(e.isShiftPressed() == keyData[i].isShift)){
						keyIndex = i;
						break;
					}
				}
				if(keyIndex) {
					playKey(keyIndex);
					if(recording){
						recordData.push({keyIndex: keyIndex, time: scene.time-recordStartTime});
					}
				}
				
			}
		});
		function playKey(keyIndex){
			var type = keyData[keyIndex].type;
			var index = keyData[keyIndex].index;
			var soundIndex = keyData[keyIndex].soundIndex;
			type == "white"? whiteKey[index].hit():blackKey[index].hit();
			Sound.playSfx("sound"+soundIndex);
		}
		console.log("start");
    }
}
