/*
Animatied Sprite - 12/05/2014
By Kevin Carr 
http://www.kevincarr.com/
*/

function kcSpriteCycle(myObj) {
	var backgroundPos = myObj.css('backgroundPosition').split(" ");
	var yPos = backgroundPos[1];
	var myStep = ((yPos.split('px')[0])*-1)/myObj.height();

	if (myStep>0){
		if((myStep+1)*myObj.height()<myObj.css('max-height').split('px')[0]){
			backgroundPos[1] =((myStep+1)*myObj.height())*-1;
			backgroundPos[1] = backgroundPos[1] + 'px';
		} else {
			if(myObj.hasClass('kcButton')){
				backgroundPos[1] = myObj.height()*-1;
			} else {
				backgroundPos[1] = 0;
			}
			backgroundPos[1] = backgroundPos[1] + 'px';
		}
		newPos = backgroundPos.join(" ");
		myObj.css('background-position', newPos);
	} else {
		// if sprite is not a button animate it
		if(!myObj.hasClass('kcButton')){
			backgroundPos[1] =((myStep+1)*myObj.height())*-1;
			backgroundPos[1] = backgroundPos[1] + 'px';
			newPos = backgroundPos.join(" ");
			myObj.css('background-position', newPos);
		}
	}
}

function kcSpriteInit(myObj,isButton,myTime){
	if (myTime>0){
		setInterval( function() { kcSpriteCycle(myObj); }, myTime );
	}
	if(isButton){
		myObj.addClass('kcButton');
		myObj.mouseover(function() {
			myObj.css('background-position', '0px 0px');
		});
		myObj.mouseout(function() {
			myObj.css('background-position', '0px -'+myObj.height()+'px');
		});
		myObj.css('background-position', '0px -'+myObj.height()+'px');
	} else {
		myObj.css('background-position', '0px 0px');
	}
}

$(document).ready(function(){
	// Examples:
	kcSpriteInit($("#myDivAnimatedA"), true, 600);
	kcSpriteInit($("#myDivAnimatedB"), true, 100);
	kcSpriteInit($("#myDivAnimatedC"), false, 200);
});