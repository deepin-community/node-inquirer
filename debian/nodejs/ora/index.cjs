const ora = require("./ora.cjs");
const res = ora.default;
Object.keys(ora).forEach(k => {if(k!=='default')res[k]=ora[k]});
module.exports = res;
