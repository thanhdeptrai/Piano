(function () {
    CAAT.PianoKey = function () {
        CAAT.PianoKey.superclass.constructor.call(this);
        return this;
    }

    CAAT.PianoKey.prototype = {
        initialize: function (director, posX, posY, width, height, type, keyIndex) {
            this.director = director;
            this.setBounds(posX,posY,width,height);
			this.keyIndex = keyIndex;
			this.hitting = false;
			this.type = type;
			var shadowGradient = director.ctx.createLinearGradient(0,0,0,height);
			shadowGradient.addColorStop(1,"#666");
			shadowGradient.addColorStop(0,"#FFF");
			this.shadow = new CAAT.ActorContainer().
				setBounds(0,0,width,height).
				setFillStyle(type=="white"?shadowGradient:"#555").
				setAlpha(0).
				enableEvents(false);
			this.addChild(this.shadow);
			this.enableEvents(true);
            return this;
        },
        paint: function (director,time) {
			CAAT.PianoKey.superclass.paint.call(this, director, time);
            var ctx = director.ctx;
			
			ctx.fillStyle = (this.type == "white")?"#FFF":"#000";
			ctx.fillRect(0,0,this.width,this.height);
			if(this.type == "white"){
				ctx.strokeStyle = "#000";
				ctx.strokeRect(0,0,this.width,this.height);
			}
			
			/*
			var width = this.width;
            var height = this.height;
			ctx.fillStyle = (this.type == "white")?"#FFF":"#000";
			ctx.strokeStyle = "#000";
			var radius = 5;
            ctx.beginPath();
            ctx.moveTo(radius,  0);
            ctx.lineTo(width - radius, 0);
            ctx.quadraticCurveTo(width, 0, width, radius);
            ctx.lineTo(width, height - radius);
            ctx.quadraticCurveTo(width , height, width - radius, height);
            ctx.lineTo(radius, height);
            ctx.quadraticCurveTo(0, height, 0, height - radius);
            ctx.lineTo(0, radius);
            ctx.quadraticCurveTo(0, 0, radius, 0);
			
            ctx.closePath();
			ctx.fill();
			ctx.stroke();
			*/
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