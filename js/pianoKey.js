
(function () {
    CAAT.SettingContainer = function () {
        CAAT.SettingContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.SettingContainer.prototype = {
        initialize: function (director,posX,posY,width,height) {
            this.director = director;
			this.setBounds(posX,posY,width,height);
            return this;
        },
        paint: function (director,time) {
			CAAT.SettingContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
			
            return this;
        },
		
    }
    extend(CAAT.SettingContainer, CAAT.Foundation.ActorContainer);
})();

(function () {
    CAAT.PlayListContainer = function () {
        CAAT.PlayListContainer.superclass.constructor.call(this);
        return this;
    }

    CAAT.PlayListContainer.prototype = {
        initialize: function (menuContainer,posX,posY,width,height) {
            this.director = menuContainer.director;
			this.menuContainer = menuContainer;
			this.setBounds(posX,posY,width,height);
            return this;
        },
        paint: function (director,time) {
			CAAT.PlayListContainer.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
			
            return this;
        },
		mouseDown: function(e){
			CAAT.PlayListContainer.superclass.mouseDown.call(this,e);
			var self = this;
			console.log(e.x+" "+e.y);
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
			var playListImage =  new CAAT.SpriteImage().initialize(director.getImage("recordButton"),1,3);
			var playListButton = new CAAT.Button().initialize(director,playListImage,0,1,2,0,
			function(e){
				if(self.inAnimation) return;
				
				self.inAnimation = true;
				if(!self.firstTime)self.playListContainer = new CAAT.PlayListContainer().initialize(self,director.width/2,self.y,director.width/2,self.height).setFillStyle(self.fillStyle);
				else self.playListContainer.setLocation(director.width/2,self.y);
				var path= new CAAT.PathUtil.LinearPath().
					setInitialPosition(director.width,0).
					setFinalPosition(self.playListContainer.x,self.playListContainer.y);
				var pathBehavior= new CAAT.PathBehavior().setPath( path ).setFrameTime(self.time,369).
				addListener({
					behaviorExpired: function(director,time){
						self.inAnimation = false;
						//self.playListContainer.setBounds(self.playListContainer.x,self.playListContainer.y,self.playListContainer.width,self.playListContainer.height);
						//self.playListContainer.emptyBehaviorList();
					}
				});
				self.playListContainer.addBehavior(pathBehavior);
				if(!self.firstTime){
					self.director.currentScene.addChild(self.playListContainer);
					self.firstTime = true;
				}
			}).setLocation(this.width/2 - playListImage.singleWidth);
			
			this.playListButton = playListButton;
			this.addChild(playListButton);
            return this;
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