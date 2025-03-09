const express = require("express");
const os = require("os");
const cluster = require("cluster");
const { pid } = require("process");

const totalCpus = os.cpus().length; /// server worker switches only on linux by round robin scheduling  --> but on windows Node js on refresh doesnot show different worker pocess id

if (cluster.isPrimary) {
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const PORT = 8000;

  app.get("/", (req, res) => {
    return res.json({ message: `Hello from different servers ${process.pid}` });
  });

  app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));
}
