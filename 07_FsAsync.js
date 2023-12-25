const { readFile, writeFile } = require("fs");

readFile("./Content/First.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;

  readFile("./Content/Second.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;

    writeFile(
      "./Content/file-async.txt",
      `Here is the result ${first}, ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
      }
    );
  });
});
