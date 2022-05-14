// ==UserScript==
// @name         Press O for any gamemode.
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  press p for toggle, o for die (it will be slow after level 5)
// @author       todp
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// @grant        none
// ==/UserScript==
   let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
    const scale = window.devicePixelRatio = 1;
let toggle = false;
function ok() {
     if (!input.should_prevent_unload()) return;
                 gui();
    if (toggle) return;
input.execute('lb_reconnect');
    input.execute('ren_ui false');
    setTimeout(()=>{
    input.execute('ren_ui true');
},7500);

}
 document.addEventListener("keydown", (kc) => {
        if (kc.keyCode === 79) {
            ok();
        }
    });
document.addEventListener("keydown", (kc) => {
        if (kc.keyCode === 80) {
            toggle = !toggle;
        }
    });
        let gui = () => {
            ctx.fillStyle = "white";
            ctx.lineWidth = 3;
            ctx.font = 1 + "em Ubuntu";
            ctx.strokeStyle = "black";
            ctx.strokeText(`Press O: ${toggle ? 'OFF' : 'ON'}`, 20, 70);
            ctx.fillText(`Press O: ${toggle ? 'OFF' : 'ON'}`, 20, 70);
            window.requestAnimationFrame(gui);
        }
        setInterval(()=>{
         if (!input.should_prevent_unload()) {
             gui();
         }
        },10000);
