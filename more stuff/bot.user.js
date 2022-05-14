// ==UserScript==
// @name         weird bot lol
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  generates random movement and mouse stuff
// @author       todp
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?domain=diep.io
// @grant        none
// ==/UserScript==
setInterval(k, 500);
function k () {
    input.keyDown(13);
    input.keyUp(13);
    input.keyDown(1);
      input.execute('game_stats_build 222222233333337777777888888811111');
}
(function() {
	var isActive = true;

	function f(e){
		if (!isActive) return;
		var a = new KeyboardEvent("keydown", {
			bubbles: true,
			cancelable: true,
			shiftKey: false
		});
		delete a.keyCode;
		Object.defineProperty(a, "keyCode", {
			"value": 75
		});
		dispatchEvent(a);
	}
	function a(e) {
		addEventListener(e, f);
	}

	for (var i of ["focus", "blur", "keyup"]) {
		a(i);
	}

	addEventListener("keydown", function(e) {
		if (e.keyCode == 75 && e.isTrusted) {
			isActive ^= true;
		}
	});
}());
var random = 1;
function moveGen() {
    random = Math.floor(Math.random()*5);
    if (random == 1 ) {
         input.mouse(889, 327);
        input.keyDown(37);
        input.keyUp(38);
        input.keyUp(39);
        input.keyUp(40);
    }
    if (random == 2 ) {
        input.mouse(676, 151);
        input.keyDown(40);
          input.keyUp(39);
        input.keyUp(37);
        input.keyUp(38);
    }
    if (random == 3 ) {
         input.mouse(438, 332);
        input.keyDown(39);
            input.keyUp(40);
        input.keyUp(38);
        input.keyUp(37);
    }
    if (random == 4 ) {
         input.mouse(689, 489);
        input.keyDown(38);
              input.keyUp(40);
        input.keyUp(39);
        input.keyUp(37);
    }
}
setInterval(moveGen, 750);
