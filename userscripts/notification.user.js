// ==UserScript==
// @name         notification
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  die
// @author       Ytodp
// @match        https://diep.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=herokuapp.com
// @grant        none
// ==/UserScript==
if (!window.Hook) return;
document.addEventListener('keydown', function (event) {
    if (event.key == 'n') {
      Hook.recv(new Uint8Array([3, ...new TextEncoder().encode(`notification :D`), 0, 0, 0, 255, 0, ...new Uint8Array(new Float32Array([2500]).buffer), 65, 0]));
                                                                                     //  //  //                                         //delay ms
                                                                       //          blue green red
    }
});
