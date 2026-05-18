const os = require('os');

console.log("Hostname:", os.hostname());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("CPU Architecture:", os.arch());
console.log("Platform:", os.platform());
console.log("Number of CPUs:", os.cpus().length);