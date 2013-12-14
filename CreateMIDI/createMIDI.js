/*
//Xuoi : file -> base64 -> str -> data -> MidiFile -> replayData -> musicData
//Nguoc : musicData -> replayData -> MidiFile -> data -> str -> base64 -> file
B1: musicData->replayData:
musicData->arr_str
arr_str->replayData
*/


(function (window) {
	var beatsPerMinute = 60000000 / 1000000;
	var ticksPerBeat=1000;
var Create=function(musicData){
	var recordData=stringToRecordData(musicData);
	var firtDelay=recordData[0].time;
	var record =recordDataToTrueNoteNumber(recordData);
	var syncNote=SyncNoteOnAndNoteOff(record,firtDelay);
	
	///*
	var arrReplayData=getReplayData(syncNote);
	

	var noteEvents = [];
	arrReplayData.forEach(function(note) {
	    Array.prototype.push.apply(noteEvents, MidiEvent.createNote(note.noteNumber,note.deltaTime,note.subtype));
	});

	// Create a track that contains the events to play the notes above
	var track = new MidiTrack();
	track.setTempo(1000000)
	for (var i=0;i<noteEvents.length;i++){
		track.addEvent(noteEvents[i]);
	}
	var song  = MidiWriter({ tracks: [track] });
	//data:audio/mid;base64,
	download("filename.mid",song.b64,"data:audio/mid;base64,");
//*/

}

function download(filename, text, base) {
    var pom = document.createElement('a');
    pom.setAttribute('href', base + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}
var note= function(noteNum,deltaTime,subtype){
	var obj_track={
		deltaTime: 0,
		subtype: "trackName",
		text: "Right Hand",
		type: "meta",
	};
	var obj_time={
		deltaTime: 0,
		denominator: 8,
		metronome: 24,
		numerator: 6,
		subtype: "timeSignature",
		thirtyseconds: 8,
		type: "meta"
	};
	var obj_note={
		channel: 0,
		deltaTime: deltaTime,
		noteNumber: noteNum,
		subtype: subtype,
		type: "channel",
		velocity: 72
	};
	return obj_note;
}

var getReplayData=function(record){

	
	
	var arr=[];
	for (var i in record){
		var subtype;
		if (record[i][0]==0)subtype="noteOn"; else subtype="noteOff";
		var noteNum=record[i][1];
		var time=record[i][2];
		
		var secondsToGenerate=time/1000;
		var beatsToGenerate=secondsToGenerate*(beatsPerMinute/60);
		var ticksToEvent=beatsToGenerate*ticksPerBeat;
		var deltaTime=Math.floor(ticksToEvent);
		//var obj={
		//	event:new note(noteNum,deltaTime),
		//	ticksToEvent: ticksToEvent,
		//	track: 0
		//};
		arr.push(new note(noteNum,deltaTime,subtype));
	}
	return arr;
}
var SyncNoteOnAndNoteOff=function(record,delay){
	var arr_note=[];
	var length=record.length;
	for (var i=0;i<length;i++){
		var obj_note=[
			0,//type
			record[i][0],//noteNumber
			record[i][1]//time
		];
			
		var obj_note2=[
			1,//type
			record[i][0],//noteNumber
			record[i][1]//time
		];
		arr_note.push(obj_note);
		var tmpNote=record[i][0];
		var tmpTime=record[i][1];
		for (var j=i+1;j<length;j++){
			if (record[j][1]>tmpTime+5000) {
				obj_note2[2]+=5000;
				arr_note.push(obj_note2);
				break;}
			else if(record[j][0]==tmpNote){
				obj_note2[2]+=record[j][1]-tmpTime-10;
				arr_note.push(obj_note2);
				break;
			}
		}
		
	}
	var length2=arr_note.length-1;
	for (var j=0;j<length2+1;j++){
		for (var i=0;i<length2;i++){
			if (arr_note[i][2]>arr_note[i+1][2]){
				var tmp=arr_note[i].concat();
				arr_note[i]=arr_note[i+1].concat();
				arr_note[i+1]=tmp.concat();
			}
		}
	}
	arr_record=[];
	arr_record.push([arr_note[0][0],arr_note[0][1],delay]);
	for (var j=1;j<length2+1;j++){
			arr_record.push([arr_note[j][0],arr_note[j][1],arr_note[j][2]-arr_note[j-1][2]]);
	}	
	return arr_record;
}


function stringToRecordData(str){
			var outputData = [];
			if(str.length==0) return outputData;
			var stringArray = str.split(",");
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
				outputData.push({noteNum:temp[0]<<0,time:temp[1]<<0});
			}
			return outputData;
}
function recordDataToTrueNoteNumber(recordData){
	var record=[];
	var length=recordData.length;
	for (var i=0;i<length;i++){
		var key=getKeyFromnoteNum(recordData[i].noteNum);
		var time=recordData[i].time;
		record.push([key,time]);
	}
	return record;

}
function getKeyFromnoteNum(keyIndex){
			var currentKey = keyData[keyIndex];
			var type = currentKey.type;
			var soundId = currentKey.index;
			if (type=="white") soundId+=25;
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
			return soundId;
}

window.Create=Create;
})(window);