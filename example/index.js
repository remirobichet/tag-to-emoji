const m = require("../lib");

let element = '<div>Hello :wave: World :earth_africa:!</div>';

console.log(m.parse(element));
// '<div>Hello 👋 World 🌍!</div>'
