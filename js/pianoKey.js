(function () {
    CAAT.PianoKey = function () {
        CAAT.PianoKey.superclass.constructor.call(this);
        return this;
    }

    CAAT.PianoKey.prototype = {
        initialize: function (director, posX, posY, width, height, type) {
            this.director = director;
            this.setBounds(posX,posY,width,height);
			this.hitting = false;
			this.type = type;
			this.shadow = new CAAT.ActorContainer().setBounds(0,0,width,height).setFillStyle(type=="white"?"#CCC":"#555").setAlpha(0);
			this.addChild(this.shadow);
			this.enableEvents(true);
            return this;
        },
	
        paint: function (director,time) {
			CAAT.PianoKey.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
			if(this.type == "white"){
				ctx.strokeStyle = "#000";
				ctx.strokeRect(0,0,this.width,this.height);
			}
			else{
				ctx.fillStyle = "#000";
				ctx.fillRect(0,0,this.width,this.height);
			}
            return this;
        },
		hit: function(){
			var self = this;
			if(this.hitting){
				this.shadow.emptyBehaviorList();
			}
			this.hitting = true;
			var alphaBehavior = new CAAT.Behavior.AlphaBehavior().setValues(1, 0).setDelayTime(0, 1000).setCycle(false).
			addListener({
				behaviorExpired: function(director, time) {
					self.shadow.emptyBehaviorList();
				}
			});
			this.shadow.addBehavior(alphaBehavior);
		}
    }
    extend(CAAT.PianoKey, CAAT.Foundation.ActorContainer);
})();