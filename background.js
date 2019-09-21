

const childprocess = require("child_process");
const fs = require("fs");

const outStream = fs.createWriteStream("output.log" ,{ fd : fs.openSync("output.log","a") })

const newPro = childprocess.spawn("node", ["index.js"], {
    detached: true,
    stdio: ["ignore", outStream , outStream]
});

console.log("check output log")
newPro.unref()