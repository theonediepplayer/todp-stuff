// ==UserScript==
// @name         Copy party link
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  allows u to copy links from ffa, tag, survival, maze AND 2 TEAMS (press [), you need wasm hook, get it from https://github.com/ABCxFF/diepindepth/blob/main/protocol/userscripts/packethook.user.js
// @author       todp
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant        none
// ==/UserScript==
if (!window.Hook) return;
if (!window.Hook) alert('You need Diep.io Packet WASM Hook to use this.')
function recv(args) {
Hook.recv(new Uint8Array([args]))
}
 document.addEventListener("keydown", (kc) => {
        if (kc.keyCode === 219) {
            recv(6);
        }
    });
