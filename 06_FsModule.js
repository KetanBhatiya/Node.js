const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./Content/First.txt", "utf8");
const second = readFileSync("./Content/Second.txt", "utf8");

writeFileSync(
    "./Content/result.txt", 
    `Here is the result ${first},${second}`,
    {flag: 'a'}
    );
