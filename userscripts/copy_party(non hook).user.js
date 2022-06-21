// ==UserScript==
// @name         copy party link (non hook)
// @namespace    http://tampermonkey.net/
// @version      1.1
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
 let consol = "";
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
    if (currentServer=='') return;
      serverID = serverLink(currentServer.split("://")[1].split("-80.lobby")[0]).toUpperCase();
      val = `https://diep.io/#${serverID}`;
}

setInterval(link, 500);
unsafeWindow.link = link;

document.addEventListener("keydown", (kc) => {
    protect = true;
        if (kc.keyCode === 13) {
             consol = document.getElementById('textInput').value;
            if (consol === 'game_copy_link' ) {
                protect = false;
                if (currentServer==='') return;
                navigator.clipboard.writeText(val);
            }
            if (protect === false) {
                if (currentServer==='') {
                    document.getElementById('textInput').value = "none";
                                     }
                document.getElementById('textInput').value = "party,but_server_link_copied!";
            }
        }
    });
