var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT  = 600;
var SFX_VOLUME = 100;
var MUSIC_VOLUME = 100;
var PLAYBACK_SPEED = 1;
musicData = [
	"G4 1292,51 1375,50 1500,48 1792,47 2083,48 2459,47 2750,46 3000,44 3334,47 4500,48 4750,47 5043,46 5334,43 5709,47 6667,48 6959,47 7334,46 7584,44 8000,46 8751,47 9088,48 9791",
	"36 708,39 917,40 1083,40 1333,32 1333,41 1791,41 2250,36 2666,39 3166,36 4082,39 4291,40 4500,41 4708,29 4958,40 4958,43 5416,43 5792,36 6249,38 6708,36 7541,43 7791,44 8000,45 8125,45 8332,29 8374,46 8750,46 9166,39 9208,41 9292,39 9666,41 10125,47 10583,47 10957,48 10999,47 11291,46 11541,45 11834,27 11875,36 12333,38 12791,36 13250,27 13710,46 14165,45 14625,43 15083,35 15500,43 15541,44 16000,44 16458,39 16875,42 17333,39 18458,43 18666,42 18833,42 19041,27 19041,43 19541,43 19958,36 20458,38 20875,36 22041,39 22293,40 22500,41 22750,33 22750,42 23208,40 23583,37 23625,42 23625,37 24166,40 24625",
	
];
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
        var loadActor = new CAAT.Foundation.ActorContainer().setBounds(0,150,director.width,director.height);
		scene.addChild(loadActor);
		loadActor.paint = function(director,time){
			var ctx = director.ctx;
			
			var backgroundGradient=ctx.createLinearGradient(0,0,CANVAS_WIDTH,0);
			backgroundGradient.addColorStop(0,"#000");
			backgroundGradient.addColorStop(1,"#FFF");
			ctx.fillStyle = backgroundGradient;
			ctx.fillRect(-this.x,-this.y,CANVAS_WIDTH,CANVAS_HEIGHT);
			
			
			var barLength = 300;
			var barHeight = 15;
			var barPoxX = (CANVAS_WIDTH - barLength)/2;
			var barPoxY = 40;
			ctx.fillStyle = "#333";
			ctx.strokeStyle = "#FFF";
			ctx.beginPath();
			ctx.moveTo(barPoxX,barPoxY);
			ctx.lineTo(barPoxX+barLength,barPoxY);
			ctx.arc(barPoxX+barLength,barPoxY+barHeight/2,barHeight/2,-Math.PI/2, Math.PI/2);
			ctx.moveTo(barPoxX+barLength,barPoxY+barHeight);
			ctx.lineTo(barPoxX,barPoxY+barHeight);
			ctx.arc(barPoxX,barPoxY+barHeight/2,barHeight/2,Math.PI/2,3/2*Math.PI);
			ctx.closePath();
			ctx.fill();
			if(loadedPercent<0) loadedPercent = 0;
			ctx.fillStyle = "#0FF";
			ctx.font = "30px Times New Roman";
			ctx.fillText(loadedPercent+"%",barPoxX,30);
			ctx.fillText("LOADING...",barPoxX,90);
			if(loadedPercent<1) return;
			var barGradient = ctx.createLinearGradient(barPoxX,barPoxY,barPoxX+barLength,barPoxY);
			barGradient.addColorStop(1,"#0FF");
			barGradient.addColorStop(0.5,"#FF0");
			barGradient.addColorStop(0,"#FFF");
			ctx.fillStyle = barGradient;
			ctx.beginPath();
			ctx.moveTo(barPoxX,barPoxY+barHeight);
			ctx.arc(barPoxX,barPoxY+barHeight/2,barHeight/2,Math.PI/2,3/2*Math.PI);
			ctx.closePath();
			ctx.fill();
			ctx.fillRect(barPoxX,barPoxY,barLength*loadedPercent/100,barHeight);
			
			if(loadedPercent<2) return;
			ctx.beginPath();
			ctx.moveTo(barPoxX+barLength*loadedPercent/100,barPoxY);
			ctx.arc(barPoxX+barLength*loadedPercent/100,barPoxY+barHeight/2,barHeight/2,-Math.PI/2, Math.PI/2);
			ctx.closePath();
			ctx.fill();
			if(loadAudios&&loadImages&&(+new Date() - startTime>1000)) {
				run(director,loadImages,loadAudios);
				scene.removeChild(this);
			}
		}
		load();
		CAAT.loop(24);
	}
    function load() {
		
		
		var audioElement = new AudioPreloader();
		for (var i=1;i<62;i++){
			audioElement.addElement("sound"+i,["sound/sound"+i+".mp3","sound/sound"+i+".ogg"]);
		}
			
        var imageElement = new CAAT.Module.Preloader.Preloader().
			addElement("recordButton","img/recordButton.png").
			addElement("playButton","img/playButton.png").
			addElement("stopButton","img/stopButton.png").
			addElement("deleteButton","img/deleteButton.png").
			addElement("pauseButton","img/pauseButton.png");
		
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
		
		var keyBoardPosX = 50;
		var keyBoardPosY = 300;
		var whiteKeyWidth = 20;
		var whiteKeyHeight = 120;
		var blackKeyWidth = 14;
		var blackKeyHeight = 70;
		var playbackBoardPoxY = 100;
		var backgroundGradient= director.ctx.createLinearGradient(0,0,0,director.height); 
			backgroundGradient.addColorStop(0,"#000");
			backgroundGradient.addColorStop(1,"#FFF");
		var background = new CAAT.ActorContainer().setBounds(0,0,director.width,director.height).setFillStyle(backgroundGradient);
		scene.addChild(background);
		
		var pausedStart = 0;
		scene.createTimer(0,Number.MAX_VALUE,
		function (scene_time, timer_time, timertask_instance) {   // timeout

		},
		function (scene_time, timer_time, timertask_instance) {   // tick
			if((pausedStart==0)&&pausingRecord){
				pausedStart = scene.time;
			}
			if((pausedStart!=0)&&!pausingRecord){
				scene.time = pausedStart;
				pausedStart = 0;
			}
		},
		function (scene_time, timer_time, timertask_instance) {   // cancel

		});
		
		
		for(var i=0;i<whiteKeyLength;i++){
			var whiteKeyActor = new CAAT.PianoKey().initialize(director,keyBoardPosX+whiteKeyWidth*i,keyBoardPosY,whiteKeyWidth,whiteKeyHeight,"white",i+blackKeyLength);
			whiteKeyActor.mouseDown = function(){_down(this);}
			whiteKeyActor.touchStart = function(){_down(this);}
			whiteKey.push(whiteKeyActor);
			scene.addChild(whiteKeyActor);
		}
		var blackKeyIndex = 0;
		for(var i=0;i<whiteKeyLength-1;i++){
			if((i%7!=2)&&(i%7!=6)){
				var blackKeyActor = new CAAT.PianoKey().initialize(director,keyBoardPosX+whiteKeyWidth-blackKeyWidth/2+whiteKeyWidth*i,keyBoardPosY,blackKeyWidth,blackKeyHeight,"black",blackKeyIndex);
				blackKeyActor.mouseDown = function(){_down(this);}
				blackKeyActor.touchStart = function(){_down(this);}
				blackKey.push(blackKeyActor);
				scene.addChild(blackKeyActor);
				blackKeyIndex++;
			}
		}
		_down = function(keyActor){
			if(playingRecord) return;
			playKey(keyActor.keyIndex);
			if(recording) {
				recordData.push({keyIndex: keyActor.keyIndex, time: scene.time-recordStartTime});
			}
		}
		
		var recording = false;
		var playingRecord = false;
		var pausingRecord = false;
		var recordStartTime = 0;
		var recordData = [];
		var currentRecordDataIndex = 0;
		var recordDataString = [];
		var selectingRecord = 0;
		var currentRecordIndex = 0;
		var buttonSize = 50;
		
		var recordListButtons = [];
		var maxRecord = 20;
		
		for(var i=0;i<musicData.length;i++){
			addRecord();
			recordDataString.push(musicData[i]);
			if(i==musicData.length-1)recordData = stringToRecordData(musicData[i]);
		}
		
		function addRecord(){
			var index = recordListButtons.length;
			var width = (index>9)?30:20;
			var space = (index>9)?35*(index-10)+25*10:25*index;
			var button = new CAAT.ActorContainer().setBounds(keyBoardPosX+space,buttonSize,width,25);
			selectingRecord = index;
			currentRecordDataIndex = index;
			button.index = index;
			button.paint = function(director,time){
				var ctx = director.ctx;
				ctx.fillStyle = (this.index == selectingRecord)?"#00F":"#0FF";
				this.width = (this.index>9)?30:20;
				ctx.fillRect(0,0,this.width,this.height);
				ctx.fillStyle = "#FF0";
				ctx.font = "20px Times New Roman";
				ctx.fillText(""+this.index,5,20);
				ctx.strokeStyle = "#000";
				ctx.strokeRect(0,0,this.width,this.height);
			}
			button.mouseDown = function(){ selectingRecord = this.index};
			button.touchStart = function(){ selectingRecord = this.index};
			recordListButtons.push(button);
			scene.addChild(button);
		}
		var deleteImage = new CAAT.SpriteImage().initialize(director.getImage("deleteButton"),1,1);
		var deleteButton = new CAAT.Button().initialize(director,deleteImage,0,0,0,0,function(){
			scene.removeChild(recordListButtons[selectingRecord]);
			for(var i=recordListButtons.length-1;i>=selectingRecord+1;i--){
				recordListButtons[i].x = recordListButtons[i-1].x; 
				recordListButtons[i].index--;
			}
			recordListButtons.splice(selectingRecord,1);
			recordDataString.splice(selectingRecord,1);
			if(recordDataString.length==0) recordData = [];
			if(selectingRecord>=recordListButtons.length) selectingRecord--;
		}).
			setLocation(50+buttonSize*3,0).
			setScaleAnchored(buttonSize/deleteImage.singleHeight,buttonSize/deleteImage.singleWidth,0,0);
		scene.addChild(deleteButton);
		
		var recordImage = new CAAT.SpriteImage().initialize(director.getImage("recordButton"),1,1);
		var recordButton = new CAAT.Button().initialize(director,recordImage,0,0,0,0,function(){
			if(playingRecord) {
				return;
			}
			if(!recording){
				recording = true;
				recordData = [];
				recordStartTime = scene.time;
			}
			else{
				recording = false;
				if(recordData.length==0) return;
				if(recordDataString.length>maxRecord) return;
				addRecord();
				recordDataString.push(recordDataToString(recordData));
				console.log(recordDataString[recordDataString.length-1]);
			}
		}).
			setLocation(50,0).
			setScaleAnchored(buttonSize/recordImage.singleHeight,buttonSize/recordImage.singleWidth,0,0);
		scene.addChild(recordButton);
		
		var playImage = new CAAT.SpriteImage().initialize(director.getImage("playButton"),1,1);
		var pauseImage = new CAAT.SpriteImage().initialize(director.getImage("pauseButton"),1,1);
		var playButton = new CAAT.Button().initialize(director,playImage,0,0,0,0,function(){
			if(recording) return;
			if(!playingRecord){
				if(currentRecordDataIndex != selectingRecord){
					currentRecordDataIndex = selectingRecord;
					if(recordDataString[selectingRecord]) recordData = stringToRecordData(recordDataString[selectingRecord]);
				}
				if(recordData.length>0){
					currentRecordIndex = 0;
					playingRecord = true;
					recordStartTime = scene.time;
					playButton.setBackgroundImage(pauseImage,true);
				}
			}
			else {
				if(!pausingRecord){
					pausingRecord = true;
					playButton.setBackgroundImage(playImage,true);
				}
				else{
					pausingRecord = false;
					playButton.setBackgroundImage(pauseImage,true);
				}
			}
		}).
			setLocation(50+buttonSize,0).
			setScaleAnchored(buttonSize/playImage.singleHeight,buttonSize/playImage.singleWidth,0,0);
		scene.addChild(playButton);
		
		var stopImage = new CAAT.SpriteImage().initialize(director.getImage("stopButton"),1,1);
		var stopButton = new CAAT.Button().initialize(director,stopImage,0,0,0,0,function(){
			if(recording) return;
			if(playingRecord) {
				currentRecordIndex = 0;
				playButton.setBackgroundImage(playImage,true);
				playingRecord = false;
				pausingRecord = false;
				pausedStart = 0;
			}
		}).
			setLocation(50+buttonSize*2,0).
			setScaleAnchored(buttonSize/stopImage.singleHeight,buttonSize/stopImage.singleWidth,0,0);
		scene.addChild(stopButton);
		
		var clockActor = new CAAT.ActorContainer().setBounds(260,40,10,10);
		clockActor.paint = function(director,time){
			var ctx = director.ctx;
			if(!recording&&!playingRecord) return;
			ctx.fillStyle = "#0FF";
			ctx.font = "25px Times New Roman";
			if(recording){
				var showTime = time - recordStartTime;
			}
			if(playingRecord){
				var remainTime = recordData[recordData.length-1].time + recordStartTime - ((pausingRecord)?pausedStart:scene.time);
				var playedTime = recordData[recordData.length-1].time - remainTime;
				if(playedTime>=recordData[currentRecordIndex].time/PLAYBACK_SPEED){
					playKey(recordData[currentRecordIndex].keyIndex);
					currentRecordIndex++;
					if(currentRecordIndex==recordData.length) {
						playingRecord = false;
						playButton.setBackgroundImage(playImage,true);
					}
				}
				var showTime = remainTime+1000;
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
		
		var timePerScene = 3000;
		var playbackBoard = new CAAT.ActorContainer().setBounds(0,playbackBoardPoxY,whiteKeyLength*whiteKeyWidth,keyBoardPosY-playbackBoardPoxY);
		var playbackKey = new CAAT.ActorContainer().setBounds(0,0,whiteKeyLength*whiteKeyWidth,keyBoardPosY-playbackBoardPoxY);
		playbackKey.paint = function(director,time){
			var ctx = director.ctx;
			if(playingRecord){
				var playedTime = ((pausingRecord)?pausedStart:time) - recordStartTime;
				var passedPixel = playedTime/timePerScene*this.height*Math.pow(PLAYBACK_SPEED,2);
				for(var i=currentRecordIndex;i<recordData.length;i++){
					var currentKey = keyData[recordData[i].keyIndex];
					if(recordData[i].time>(playedTime+timePerScene)/Math.sqrt(PLAYBACK_SPEED)) break;
					var hitKeyActor;
					if(currentKey.type == "white"){
						hitKeyActor = whiteKey[currentKey.index];
						ctx.fillStyle = "#FFF";
						ctx.strokeStyle = "#000";
						ctx.fillRect(hitKeyActor.x,this.height + passedPixel -hitKeyActor.width - recordData[i].time/timePerScene*this.height*PLAYBACK_SPEED,hitKeyActor.width,hitKeyActor.width);
						ctx.strokeRect(hitKeyActor.x,this.height + passedPixel- hitKeyActor.width - recordData[i].time/timePerScene*this.height*PLAYBACK_SPEED,hitKeyActor.width,hitKeyActor.width);
						
					} 
					else {
						hitKeyActor = blackKey[currentKey.index];
						ctx.fillStyle = "#000";
						ctx.fillRect(hitKeyActor.x,this.height + passedPixel - hitKeyActor.width-recordData[i].time/timePerScene*this.height*PLAYBACK_SPEED,hitKeyActor.width,hitKeyActor.width);
					}
				}
			}
		}
		playbackBoard.addChild(playbackKey);
		scene.addChild(playbackBoard);
		
		var keyString = "";
		var showKeyActor = new CAAT.ActorContainer().setBounds(350,40,10,10);
		showKeyActor.paint = function(director,time){
			var ctx = director.ctx;
			ctx.fillStyle = "#F0F";
			ctx.font = "35px Times New Roman";
			ctx.fillText(keyString,0,0);
		}
		scene.addChild(showKeyActor);
		
		
		
		CAAT.registerKeyListener(
		function event(e){
			if(playingRecord) return;
			if(e.getAction() === "down"){
				var keyIndex = -1;
				for(var i=0;i<keyData.length;i++){
					if((e.getKeyCode() == keyData[i].keyCode)&&(e.isShiftPressed() == keyData[i].isShift)){
						keyIndex = i;
						break;
					}
				}
				if(keyIndex!=-1) {
					playKey(keyIndex);
					if(recording){
						recordData.push({keyIndex: keyIndex, time: scene.time-recordStartTime});
					}
				}
				
			}
		});
		function recordDataToString(recordData){
			var outputString = "";
			for(var i=0;i<recordData.length;i++){
				outputString += recordData[i].keyIndex + " "+recordData[i].time;
				if(i!=recordData.length-1) outputString+=",";
			}
			return outputString;
		}
		function stringToRecordData(str){
			var outputData = [];
			if(str.length==0) return outputData;
			var stringArray = str.split(",");
			console.log(stringArray.length);
			for(var i=0;i<stringArray.length;i++){
				var temp = stringArray[i].split(" ");
				if(temp[0].charCodeAt(0)>57){
					for(var j=0;j<keyData.length;j++){
						if(temp[0] === keyData[j].name){
							temp[0] = j;
							break;
						}
					}
				}
				outputData.push({keyIndex:temp[0]<<0,time:temp[1]<<0});
			}
			return outputData;
		}
		function playKey(keyIndex){
			var currentKey = keyData[keyIndex];
			var type = currentKey.type;
			var index = currentKey.index;
			var soundIndex = currentKey.soundIndex;
			keyString = currentKey.name;
			type == "white"? whiteKey[index].hit():blackKey[index].hit();
			Sound.playSfx("sound"+soundIndex);
		}
		console.log("start");
    }
}
