
(function () {
    CAAT.HighScoreContainer = function () {
        CAAT.HighScoreContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.HighScoreContainer.prototype = {
        initialize: function (menuContainer,posX,posY,width,height) {
			var self = this;
            this.director = menuContainer.director;
			this.menuContainer = menuContainer;
			this.setBounds(posX,posY,width,height);
			this.difficultyText = ["EASY","HARD","INSANE"];
			this.playButtonWidth = 100;
			this.playButtonHeight = 40;
			this.playButtonY = this.height - 110;
            return this;
        },
        paint: function (director,time) {
			CAAT.HighScoreContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
			ctx.fillStyle = "#433";
			ctx.fillRect(this.width-5,0,5,this.height);
			ctx.fillStyle = "#FFF";
			ctx.font = "25px Verdana";
			var highScoreText = "HIGHSCORE";
			ctx.fillText(highScoreText,this.width/2 - ctx.measureText(highScoreText).width/2,60);
			var score = pointData[SELECTING_RECORD][DIFFICULTY]+"";
			ctx.fillText(score,this.width/2 - ctx.measureText(score).width/2,100);
			
			var musicAllData = musicList[SELECTING_RECORD].Data;
			var singleMusicData;
			switch(DIFFICULTY){
				case DIFFICULTY_EASY: singleMusicData = musicAllData.Easy; break;
				case DIFFICULTY_HARD: singleMusicData = musicAllData.Hard; break;
				case DIFFICULTY_INSANE: singleMusicData = musicAllData.Insane; break;
			}
			var lastIndex = singleMusicData.NodeData.lastIndexOf(" ");
			var duration = ((singleMusicData.NodeData.substr(lastIndex+1)<<0)/1000)<<0;
			var minute = ""+((duration/60)>>0);
			minute = (minute.length==2)? minute : "0"+minute;
			var second = ""+((duration%60)>>0);
			second = (second.length==2)? second : "0"+second;
			var timeText = minute +" : "+ second;
			ctx.fillText(timeText,this.width/2-ctx.measureText(timeText).width/2,this.height-130);
			
			ctx.strokeStyle = "#FFF";
			ctx.strokeRect(this.width/2-this.playButtonWidth/2,this.playButtonY,this.playButtonWidth,this.playButtonHeight);
			var playText = "PLAY";
			ctx.fillText(playText,this.width/2-ctx.measureText(playText).width/2,this.playButtonY+30);
			for(var i=0;i<3;i++){
				ctx.fillStyle = (i==DIFFICULTY)?"#FFF":"#BBB";
				var text = this.difficultyText[i];
				ctx.fillText(text,this.width/2 - ctx.measureText(text).width/2,this.height/2+(i-1)*70);
			}
			
			if(this.loading){
				ctx.globalAlpha = 0.7;
				ctx.fillStyle = "#000";
				ctx.fillRect(-this.x,-this.y,director.width,director.height);
			}
            return this;
        },
		closeBehavior: function(type){
			var self = this;
			var path= new CAAT.PathUtil.LinearPath().
				setInitialPosition(this.x,this.y).
				setFinalPosition(-this.width,0);
			var pathBehavior= new CAAT.PathBehavior().setPath(path).setFrameTime(self.time,369).
			addListener({
				behaviorExpired: function(director,time){
					self.emptyBehaviorList();
				}
			});
			self.addBehavior(pathBehavior);
			if(type==2){
				this.menuContainer.playButton.fn();
			}
		},
		mouseDown: function(e){
			var self = this;
			if((e.x>this.width/4)&&(e.x<this.width*3/4)){
				for(var i=0;i<3;i++){
					if((e.y>this.height/2+(i-1)*70-50)&&(e.y<this.height/2+i*70-50)){
						DIFFICULTY = i;
						break;
					}
				}
			}
			if((e.x>this.width/2-this.playButtonWidth/2)&&(e.x<this.width/2+this.playButtonWidth/2)
				&&(e.y>this.playButtonY)&&(e.y<this.playButtonY+this.playButtonHeight)){
				self.menuContainer.stopButton.fn();
				self.loading = true;
				self.menuContainer.playListContainer.loading = true;
				self.enableEvents(false);
				self.menuContainer.playListContainer.enableEvents(false);
				var musicAllData = musicList[SELECTING_RECORD].Data;
				var singleMusicData;
				switch(DIFFICULTY){
					case DIFFICULTY_EASY: singleMusicData = musicAllData.Easy; break;
					case DIFFICULTY_HARD: singleMusicData = musicAllData.Hard; break;
					case DIFFICULTY_INSANE: singleMusicData = musicAllData.Insane; break;
				}
				var audioLink;
				if((!PLAY_FULL_FILE)&&(singleMusicData.Simple))audioLink = singleMusicData.Simple;
				else audioLink = singleMusicData.Full;
				Sound.playMusic(audioLink,
				function(){
					self.loading = false;
					self.menuContainer.playListContainer.loading = false;
					playingAudio = Sound.audioMusic;
					self.menuContainer.closeBehavior(2);
				},true);
				
			}
		}
    }
    extend(CAAT.HighScoreContainer, CAAT.Foundation.ActorContainer);
})();

(function () {
    CAAT.PlayListContainer = function () {
        CAAT.PlayListContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.PlayListContainer.prototype = {
        initialize: function (menuContainer,posX,posY,width,height) {
			var self = this;
            this.director = menuContainer.director;
			this.menuContainer = menuContainer;
			this.setBounds(posX,posY,width,height);
			this.textStartX = 70;
			this.textStartY = 180;
			this.textHeight = 60;
			this.offButtonPosition = {x:40,y:40};
			this.circleRadius = this.textHeight*0.3;
            return this;
        },
        paint: function (director,time) {
			CAAT.PlayListContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
			
			var font = "23px Arial";
			ctx.font = "bold "+font;
			ctx.fillStyle = "#FFF";
			
			var headX = this.offButtonPosition.x;
			var headY = this.offButtonPosition.y;
			var textPosY = headY+10;
			var text = "SONG LIST";
			ctx.fillText(text,this.width/2 - ctx.measureText(text).width/2,textPosY);
			var textStartX = this.textStartX;
			var textStartY = this.textStartY;
			var textHeight = this.textHeight;
			
			ctx.strokeStyle = "#FFF";
			ctx.fillStyle = "#ECC";
			
			this.drawCircle(ctx,headX,headY,this.circleRadius);
			ctx.fillText("X",headX-ctx.measureText("X").width/2,textPosY);
			ctx.fillRect(0,textStartY+textHeight*SELECTING_RECORD - textHeight*2/3,this.width,textHeight);
			for(var i=0;i<musicList.length;i++){
				ctx.fillStyle = (i==SELECTING_RECORD)?"#000":"#FFF";
				ctx.strokeStyle = (i==SELECTING_RECORD)?"#000":"#FFF";
				ctx.font = font;
				this.drawCircle(ctx,headX,textStartY+i*textHeight - textHeight/6,this.circleRadius);
				var textPosY = textStartY+i*textHeight;
				ctx.fillText(musicList[i].Name.toUpperCase(),textStartX,textPosY);
				ctx.font = "bold "+font;
				var numberText = ""+(i+1);
				ctx.fillText(numberText,headX-ctx.measureText(numberText).width/2,textPosY);
			}
			if(this.loading){
				var loadText = "LOADING.";
				var dotNumber = ((time/500)<<0)%4;
				for(var i=0;i<dotNumber;i++) loadText+="."
				ctx.fillText(loadText,textStartX,this.height-50);
			}
            return this;
        },
		drawCircle: function(ctx,centerX,centerY,radius){
			ctx.save();
			ctx.beginPath()
			ctx.arc(centerX,centerY,radius,0,2*Math.PI);
			ctx.closePath();
			ctx.stroke();
			ctx.restore();
		},
		checkMouseInCircle: function(ex,ey,centerX,centerY,radius){
			if(Math.pow(centerX-ex,2)+Math.pow(centerY-ey,2)<Math.pow(radius,2)) return true;
			return false;
		},
		closeBehavior: function(type){
			var self = this;
			var path= new CAAT.PathUtil.LinearPath().
				setInitialPosition(this.x,this.y).
				setFinalPosition(this.director.width,0);
			var pathBehavior= new CAAT.PathBehavior().setPath(path).setFrameTime(self.time,369).
			addListener({
				behaviorExpired: function(director,time){
					self.emptyBehaviorList();
				}
			});
			self.addBehavior(pathBehavior);
			if(type == 1){
				SELECTING_RECORD = this.currentRecord;
				DIFFICULTY = this.currentDifficulty;
			}
		},
		mouseDown: function(e){
			CAAT.PlayListContainer.superclass.mouseDown.call(this,e);
			var self = this;
			if(this.checkMouseInCircle(e.x,e.y,this.offButtonPosition.x,this.offButtonPosition.y,this.circleRadius)){
				this.menuContainer.closeBehavior(1);
			}
			var startY = this.textStartY - this.textHeight*2/3;
			for(var i=0;i<musicList.length;i++){
				if((e.y>startY+i*this.textHeight)&&(e.y<startY+(i+1)*this.textHeight)){
					SELECTING_RECORD = i;
					break;
				}
			}
		}
		
    }
    extend(CAAT.PlayListContainer, CAAT.Foundation.ActorContainer);
})();
(function () {
    CAAT.MenuContainer = function () {
        CAAT.MenuContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.MenuContainer.prototype = {
        initialize: function (director,playList,posX,posY,width,height) {
			var self = this;
            this.director = director;
			this.setBounds(posX,posY,width,height);
			this.playList = playList;
			this.listNumber = playList.length;
			this.nameList = [];
			this.audioIdList = [];
			for(var i =0;i<playList.length;i++){
				this.nameList.push(playList[i].name);
				this.audioIdList.push(playList[i].audio);
			}
			this.setFillStyle("#9b2929");
			this.marginLeft = 5;
			this.lineHeight = 20;
			this.inAnimation = false;
			var playListImage =  new CAAT.SpriteImage().initialize(director.getImage("playListButton"),1,3);
			var playListButton = new CAAT.Button().initialize(director,playListImage,0,1,2,0,
			function(e){
				if(self.inAnimation) return;
				if(PLAYING_RECORD&&(!PAUSING_RECORD)){
					self.playButton.fn();
				}
				self.inAnimation = true;
				playListPosX = director.width/2 - 80;
				playListWidth = director.width - playListPosX;
				if(!self.firstTime){
					self.playListContainer = new CAAT.PlayListContainer().initialize(self,playListPosX,self.y,playListWidth,self.height).setFillStyle(self.fillStyle);
					self.highScoreContainer = new CAAT.HighScoreContainer().initialize(self,0,self.y,playListPosX,self.height).setFillStyle("#444");
				}
				else {
					self.playListContainer.setLocation(playListPosX,self.y);
					self.highScoreContainer.setLocation(0,self.y);
					self.highScoreContainer.enableEvents(true);
					self.playListContainer.enableEvents(true);
				}
				self.playListContainer.currentRecord = SELECTING_RECORD;
				self.playListContainer.currentDifficulty = DIFFICULTY;
				var path= new CAAT.PathUtil.LinearPath().
					setInitialPosition(director.width,self.y).
					setFinalPosition(self.playListContainer.x,self.playListContainer.y);
				var pathBehavior= new CAAT.PathBehavior().setPath( path ).setFrameTime(self.time,369).
				addListener({
					behaviorExpired: function(director,time){
						self.inAnimation = false;
					}
				});
				self.playListContainer.addBehavior(pathBehavior);
				
				var path2= new CAAT.PathUtil.LinearPath().
					setInitialPosition(-self.highScoreContainer.width,self.y).
					setFinalPosition(self.highScoreContainer.x,self.highScoreContainer.y);
				var pathBehavior2= new CAAT.PathBehavior().setPath( path2 ).setFrameTime(self.time,369);
				self.highScoreContainer.addBehavior(pathBehavior2);
				
				if(!self.firstTime){
					self.director.currentScene.addChild(self.playListContainer);
					self.director.currentScene.addChild(self.highScoreContainer);
					self.firstTime = true;
				}
			}).setLocation(this.width/2 - playListImage.singleWidth/2,20);
			
			this.playListButton = playListButton;
			this.addChild(playListButton);
            return this;
        },
		closeBehavior:function(type){
			this.playListContainer.closeBehavior(type);
			this.highScoreContainer.closeBehavior(type);
		},
        paint: function (director,time) {
			CAAT.MenuContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;

            return this;
        },
    }
    extend(CAAT.MenuContainer, CAAT.Foundation.ActorContainer);
})();
(function () {
    CAAT.KeyBoardContainer = function () {
        CAAT.KeyBoardContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.KeyBoardContainer.prototype = {
        initialize: function (director,keys,posX,posY,width,height) {
            this.director = director;
			this.keys = keys;
			this.setBounds(posX,posY,width,height);
            return this;
        },
        paint: function (director,time) {
			CAAT.KeyBoardContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
			if(!this.painted){
				this.painted = true;
				this.startTime = time;
			}
			if(time<this.startTime+1){
				for(var i=0;i<this.keys.length;i++) {
					var key = this.keys[i];
					var width = key.width;
					var height = key.height;
					var x = key.x;
					var y = key.y;
					ctx.fillStyle = (key.type == "white")?"#FFF":"#000";
					ctx.strokeStyle = "#000";
					var radius = 5;
					ctx.beginPath();
					ctx.moveTo(radius+x,  y);
					ctx.lineTo(width - radius+x, y);
					ctx.quadraticCurveTo(width+x, y, width+x, radius+y);
					ctx.lineTo(width+x, height - radius+y);
					ctx.quadraticCurveTo(width+x , height+y, width - radius+x, height+y);
					ctx.lineTo(radius+x, height+y);
					ctx.quadraticCurveTo(x, height+y, x, height - radius+y);
					ctx.lineTo(x, radius+y);
					ctx.quadraticCurveTo(x, y, radius+x, y);
					
					ctx.closePath();
					ctx.fill();
					ctx.stroke();
					ctx.fillStyle = (key.type == "black")?"#FFF":"#000";
					var keyString = String.fromCharCode(keyData[key.keyIndex].keyCode);
					if(key.type == "white") keyString = keyString.toLowerCase();
					ctx.fillText(keyString,x + width/2 - ctx.measureText(keyString).width/2,y+height-3);
				}
			}
			else if(!this.cached){
				this.cached = true;
				this.cacheAsBitmap(this.startTime,CAAT.Foundation.Actor.CACHE_DEEP);
			}
            return this;
        },
		
    }
    extend(CAAT.KeyBoardContainer, CAAT.Foundation.ActorContainer);
})();
(function () {
	CAAT.PianoKey = function () {
        CAAT.PianoKey.superclass.constructor.call(this);
        return this;
    }
    CAAT.PianoKey.prototype = {
	initialize : function (director,keyBoardActor, posX, posY, width, height, type, keyIndex) {
		this.director = director;
		this.keyBoardActor = keyBoardActor;
		this.x = posX;
		this.y = posY;
		this.width = width;
		this.height = height;
		this.keyIndex = keyIndex;
		this.hitting = false;
		this.type = type;
		var shadowGradient= director.ctx.createLinearGradient(0,0,0,height);
		shadowGradient.addColorStop(1,"#666");
		shadowGradient.addColorStop(0,"#FFF");
		this.shadow = new CAAT.ActorContainer().
			setBounds(posX,posY,width,height).
			setFillStyle(type=="white"?shadowGradient:"#555").
			setAlpha(0).
			enableEvents(false).setVisible(false);
		var fireEff=new CAAT.Foundation.SpriteImage().initialize(
                            director.getImage('fireEff'),  1, 5);
		this.fireEff = new CAAT.ActorContainer().
			setBounds(posX,posY-64,50,64).
			setBackgroundImage(fireEff,true).
			setAnimationImageIndex( [0,1,2,3,4] ).
			setChangeFPS(50).
			enableEvents(false).setVisible(false);
		keyBoardActor.addChild(this.shadow);
		keyBoardActor.addChild(this.fireEff);
		
		return this;
	},
	score: function(time){
		this.fireEff.setVisible(true).setFrameTime(time,300);
		return this;
	},
	hit : function(){
			var self = this;
			if(this.hitting){
				this.shadow.emptyBehaviorList();
			}
			this.hitting = true;
			var alphaBehavior = new CAAT.Behavior.AlphaBehavior().setValues(1, 0).setDelayTime(0, 1000).setCycle(false).
			addListener({
				behaviorExpired: function(director, time) {
					self.shadow.setVisible(false);
					self.shadow.emptyBehaviorList();
				}
			});
			this.shadow.addBehavior(alphaBehavior);
			this.shadow.setVisible(true);
			return this;
		}
	}
	extend(CAAT.PianoKey, CAAT.Foundation.ActorContainer);

})();