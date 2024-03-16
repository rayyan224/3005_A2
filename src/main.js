const api = require("./api");

(async () => {
  await api.deleteStudent(3);
  console.log("Done!");
})();
