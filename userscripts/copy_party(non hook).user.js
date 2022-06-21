// ==UserScript==
// @name         copy party link (non hook)
// @namespace    http://tampermonkey.net/
// @version      1
// @description  go into the diep console (home) and type game_copy_link
// @author       todp
// @match        *://diep.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant        unsafeWindow
// ==/UserScript==
//thanks to altanis and bismuth for chad code
 let val;
 let serverID;
 let currentServer = '';
 let console = "";
 let protect = true;

    function serverLink(server) {
        let link = '';
        for (const char of server) {
            const code = char.charCodeAt(0);
            const value = (`00${code.toString(16)}`).slice(-2);
            link += value.split("").reverse().join("");
        }
        return link;
    }
    unsafeWindow.WebSocket = function(wss) {
        currentServer = wss;
        return new WebSocket(wss);
    };

function link() {
      serverID = serverLink(currentServer.split("://")[1].split("-80.lobby")[0]).toUpperCase();
      val = `https://diep.io/#${serverID}00`;
}

setInterval(link, 500);
unsafeWindow.link = link;

document.addEventListener("keydown", (kc) => {
    protect = true;
        if (kc.keyCode === 13) {
             console = document.getElementById('textInput').value;
            if (console === 'game_copy_link' ) {
                protect = false;
                navigator.clipboard.writeText(val);
            }
            if ( protect === false ) {
                document.getElementById('textInput').value = "party,but_server_link_copied!";
            }
        }
    });
