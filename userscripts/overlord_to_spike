// ==UserScript==
// @name        [PRAISE SPIKE]Overlord to spike
// @author      theonediepplayer
// @match       *://diep.io/
// @version     0.7
// @grant       none
// @description Press f Activate
// @namespace https://greasyfork.org/users/663618
// ==/UserScript==

function click() {
  input.keyDown(1);
  input.keyUp(1);
}

function mouse(x, y) {
  input.mouse(x, y);
}

function slash() {
  input.keyDown(220);
  input.keyUp(220);
}

function stats() {
  input.set_convar("game_stats_build", "111222222222233333333338888888888");
}
document.addEventListener("keydown", (kc) => {
  if (kc.keyCode === 70) {
    slash();
    setTimeout(() => {
      mouse(120, 274);
      click();
    }, 300);
    setTimeout(() => {
      slash();
      stats();
    }, 420);
  }
});
