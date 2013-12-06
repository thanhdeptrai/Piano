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
		keyBoardActor.addChild(this.shadow);
		
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