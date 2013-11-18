var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT  = 600;
var SFX_VOLUME = 100;
var MUSIC_VOLUME = 100;
var PLAYBACK_SPEED = 1;
musicData = [
	"G4 1292,51 1375,50 1500,48 1792,47 2083,48 2459,47 2750,46 3000,44 3334,47 4500,48 4750,47 5043,46 5334,43 5709,47 6667,48 6959,47 7334,46 7584,44 8000,46 8751,47 9088,48 9791",
	"36 708,39 917,40 1083,40 1333,32 1333,41 1791,41 2250,36 2666,39 3166,36 4082,39 4291,40 4500,41 4708,29 4958,40 4958,43 5416,43 5792,36 6249,38 6708,36 7541,43 7791,44 8000,45 8125,45 8332,29 8374,46 8750,46 9166,39 9208,41 9292,39 9666,41 10125,47 10583,47 10957,48 10999,47 11291,46 11541,45 11834,27 11875,36 12333,38 12791,36 13250,27 13710,46 14165,45 14625,43 15083,35 15500,43 15541,44 16000,44 16458,39 16875,42 17333,39 18458,43 18666,42 18833,42 19041,27 19041,43 19541,43 19958,36 20458,38 20875,36 22041,39 22293,40 22500,41 22750,33 22750,42 23208,40 23583,37 23625,42 23625,37 24166,40 24625",
	"35 0,46 0,49 0,51 0,39 428,43 856,44 1284,51 2569,49 2569,46 2569,50 3211,44 3424,46 3424,50 3424,33 3424,37 3852,46 4280,44 4280,41 4280,49 4280,42 4708,49 5993,46 5993,44 5993,48 6635,4 6848,43 6848,46 6848,48 6848,35 7276,9 7704,47 7704,42 7704,39 8132,47 9417,42 9417,42 10059,46 10059,43 10272,32 10272,46 10272,36 10700,40 11128,42 11556,41 11984,46 12412,49 12840,48 13268,35 13696,49 13696,39 14124,42 14552,46 14552,46 15837,49 16265,48 16693,33 17121,49 17121,37 17549,42 17977,46 17977,46 19262,49 19690,48 20118,49 20546,4 20546,35 20974,9 21402,39 21830,49 21830,49 22258,40 22258,47 22686,47 23114,46 23542,32 23970,36 24398,39 24826,40 25254,41 25682,46 26110,49 26538,48 26966,35 27394,49 27394,39 27822,46 28250,42 28250,44 28678,46 29535,51 29963,50 30605,33 30818,50 30818,37 31246,41 31674,49 31674,42 32102,46 32959,49 33387,48 33815,4 34243,49 34243,35 34671,47 34671,9 35099,39 35527,47 35527,47 35955,40 35955,49 36383,54 36811,53 37239,32 37667,36 38095,39 38523,36 38951,41 39379,36 39807,50 39807,50 40235,39 40235,19 40663,36 40663,19 41091,30 41091,34 41519,51 41519,37 41947,51 41947,34 42375,39 42803,51 43231,34 43231,37 43659,51 43659,48 44087,34 44087,50 44515,33 44515,49 44943,37 44943,40 45371,49 45371,37 45799,48 45799,49 46013,42 46227,37 46655,49 46655,40 47083,48 47083,49 47511,37 47511,19 47939,4 47939,35 48367,9 48795,46 49223,35 49223,40 49651,53 49651,19 50079,35 50079,9 50507,51 50507,50 50935,35 50935,32 51363,36 51791,39 52219,36 52647,41 53075,36 53503,50 53503,50 53931,39 53931,19 54359,36 54359,19 54787,30 54787,34 55215,51 55215,37 55643,51 55643,34 56071,39 56499,51 56927,34 56927,37 57355,51 57355,56 57783,34 57783,33 58211,55 58211,54 58639,37 58639,40 59067,55 59067,37 59495,56 59495,42 59923,37 60351,56 60351,40 60779,50 60779,49 61207,37 61207,54 61635,4 61635,35 62063,9 62491,54 62919,35 62919,40 63347,54 63347,53 63775,35 63775,9 64203,53 64203,53 64631,35 64631,32 65059,36 65487,41 65915,36 66343,32 66771,39 66771,36 67199,46 67199,39 67627,53 67627,32 67627,19 68055,36 68055,51 68483,35 68483,39 68911,42 69339,51 69339,39 69767,19 69767,51 69981,34 70195,39 70623,51 71051,41 71051,19 71479,33 71907,51 71907,19 72335,37 72335,40 72763,51 72763,37 73191,50 73191,49 73405,32 73619,37 74047,49 74047,39 74475,51 74475,53 74903,54 75331,4 75331,35 75759,9 76187,54 76187,54 76615,35 76615,32 77043,53 77043,36 77471,50 77471,39 77899,50 77899,19 78327,36 78327,35 78755,51 78755,39 79183,42 79611,39 80039,44 80467,49 80895,51 81323,53 81751,54 82179,4 82179,35 82607,9 83035,54 83035,54 83463,35 83463,32 83891,53 83891,36 84319,50 84319,39 84747,50 84747,19 85175,36 85175,51 85603,35 85603,39 86031,19 86031,34 86459,51 86459,50 86887,39 86887,49 87101,33 87315,50 88172,51 88600,4 89028,47 89028,35 89456,9 89884,47 89884,35 90312,49 90312,49 90740,32 90740,36 91168,39 91596,48 91596,36 92024,49 92452,4 92452,14 92452,47 92452,35 92880,9 93308,42 93736,37 93736,30 93736,46 93736,44 93736,40 95021,36 95021,29 95021,14 95021,43 95021,42 95877,44 95877,28 95877,39 95877,32 96305,35 96733,35 97161,28 97161,44 98017,39 98017,14 98445,40 98445,41 98873,46 98873,47 99301,4 99301,42 99301,14 99301,35 99729,9 100157,42 100585,37 100585,30 100585,46 100585,44 100585,40 101870,36 101870,29 101870,14 101870,43 101870,50 102726,32 102726,46 102726,48 102726,36 103154,39 103582,32 104010,39 104010,50 104010,48 104010,46 104010,50 104867,50 105295,19 105723,19 106151,30 106151,34 106579,51 106579,37 107007,51 107007,34 107435,39 107863,51 108291,34 108291,37 108719,51 108719,48 109147,34 109147,46 109575,50 109575,33 109575,49 110003,46 110003,37 110003,40 110431,46 110431,49 110431,48 110859,46 110859,37 110859,49 111073,46 111073,42 111287,37 111715,49 111715,46 111715,40 112143,48 112143,49 112571,37 112571,4 112999,47 112999,19 112999,35 113427,9 113855,46 114283,35 114283,53 114711,40 114711,46 114711,19 115139,14 115139,35 115139,51 115567,9 115567,44 115567,43 115995,35 115995,50 115995,32 116423,36 116851,39 117279,36 117707,41 118135,36 118563,50 118563,50 118991,39 118991,19 119419,36 119419,47 119847,19 119847,30 119847,34 120275,51 120275,37 120703,51 120703,34 121131,39 121559,51 121987,34 121987,37 122415,51 122415,51 122843,34 122843,56 122843,33 123271,51 123271,55 123271,51 123699,37 123699,54 123699,51 124127,55 124127,40 124127,56 124555,37 124555,51 124555,42 124983,37 125411,56 125411,49 125411,40 125839,50 125839,49 126267,37 126267,4 126695,49 126695,56 126695,35 127123,9 127551,54 127979,35 127979,49 127979,49 128193,54 128193,54 128407,40 128407,49 128407,53 128835,49 128835,35 128835,53 129263,9 129263,49 129263,49 129691,35 129691,53 129691,32 130119,36 130547,39 130975,36 131403,32 131831,39 131831,36 132259,46 132259,39 132687,53 132687,32 132687,19 133115,36 133115,51 133543,35 133543,49 133543,39 133971,49 134399,42 134399,51 134399,19 134827,39 134827,51 135041,49 135041,34 135255,39 135683,51 136111,49 136111,41 136111,19 136539,49 136967,51 136967,33 136967,37 137395,19 137395,49 137823,51 137823,40 137823,37 138251,50 138251,49 138465,32 138679,37 139107,49 139107,39 139535,51 139535,53 139963,49 140391,54 140391,4 140391,35 140819,9 141247,54 141247,49 141247,35 141675,49 141675,54 141675,53 141889,50 141889,32 142103,36 142531,50 142531,39 142959,50 142959,19 143387,36 143387,35 143815,51 143815,39 144243,42 144671,39 145099,44 145527,49 145955,51 146383,53 146811,19 147239,54 147239,4 147239,49 147239,35 147667,9 148095,54 148095,49 148095,35 148523,49 148523,54 148523,53 148737,50 148737,32 148951,36 149379,50 149379,39 149807,50 149807,19 150235,36 150235,51 150663,35 150663,39 151091,19 151091,34 151519,51 151519,50 151947,39 151947,49 152161,33 152375,50 153232,51 153660,14 154088,47 154088,4 154088,35 154516,14 154944,9 154944,47 154944,35 155372,49 155372,32 155800,49 155800,36 156228,50 156442,49 156656,48 156656,39 156656,36 157084,35 157512,49 157512,39 157940,42 158368,39 158796,44 159224,47 159652,54 160080,53 160508,36 160936,50 160936,52 160936,40 161150,43 161364,45 161578,50 161792,52 161792,47 161792,45 162006,43 162220,53 162220,52 162434,40 162434,50 162434,7 162648,40 162862,12 163076,45 163290,50 163504,47 163504,52 163504,45 163718,12 163932,53 163932,40 164146,50 164359,52 164359,34 164359,38 164573,41 164787,53 164787,43 165001,50 165215,41 165215,52 165215,43 165429,51 165643,41 165643,38 165857,50 165857,33 166071,36 166285,50 166499,38 166499,40 166713,52 166927,43 166927,40 167141,38 167355,54 167355,36 167569,32 167782,50 167782,55 167782,36 167996,39 168210,41 168424,39 168638,55 168638,50 168638,41 168852,55 169066,39 169066,50 169066,54 169280,36 169280,51 169280,33 169494,37 169708,51 169922,40 169922,12 170136,51 170350,44 170350,12 170564,40 170778,53 170778,37 170992,52 171205,36 171205,40 171419,43 171633,45 171847,47 172061,45 172275,43 172489,40 172703,36 172917,40 173131,43 173345,50 173345,45 173559,52 173773,47 173773,45 173987,43 174201,54 174201,40 174415,32 174628,50 174628,53 174628,55 174628,36 174841,39 175055,41 175269,39 175483,55 175483,50 175483,41 175697,39 175911,55 175911,50 175911,54 176125,36 176125,51 176125,33 176339,37 176553,51 176767,40 176767,12 176981,51 177195,40 177195,12 177409,40 177623,53 177623,37 177837,36 178050,52 178050,40 178264,43 178478,53 178478,45 178692,52 178906,7 178906,40 179120,51 179334,12 179334,44 179548,50 179548,34 179762,38 179976,41 180190,43 180404,51 180618,41 180618,43 180832,52 181046,41 181046,38 181260,32 181473,46 181473,48 181473,36 181687,39 181901,41 182115,39 182329,48 182329,46 182329,41 182543,39 182757,50 182757,36 182971,50 183185,33 183185,37 183399,40 183613,12 183827,51 183827,50 184041,17 184041,40 184041,12 184255,40 184469,37 184683,50 184896,36 184896,40 185110,43 185324,45 185538,47 185752,45 185966,43 186180,40 186394,36 186608,52 187893,39 188321,48 188321,43 188749,46 189177,48 189177,43 189605,50 189605,50 190033,40 190033,44 190461,46 190889,17 190889,44 191317,43 191745,50 191745,47 192173,51 192601,47 193029,47 193457,45 193457,52 193457,50 193457"
	
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
		CAAT.loop(60);
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
