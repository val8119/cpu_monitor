const os = nw.require("os-utils");

let minBtn = document.querySelector(".min");
let closeBtn = document.querySelector(".close");
let pinBtn = document.querySelector(".pin");

let cpuUsage = document.querySelector(".cpu-usage");
let ramUsage = document.querySelector(".ram-usage");
let ramTotal = document.querySelector(".ram-total");

var myBool = false;

var win = nw.Window.get();

win.setResizable(false);

minBtn.addEventListener("click", function () {
   win.minimize();
});

closeBtn.addEventListener("click", function () {
   win.close();
});

pinBtn.addEventListener("click", function () {
   win.setAlwaysOnTop(!myBool);
   myBool = !myBool;
});

setInterval(function () {
   os.cpuUsage(function (v) {
      cpuUsage.innerHTML = (v * 100).toFixed(2) + "%";
      ramUsage.innerHTML = (100 - os.freememPercentage() * 100).toFixed(2) + "%";
      ramTotal.innerHTML = (os.totalmem() / 1024).toFixed(0) + " GB";
   });
}, 1000);
