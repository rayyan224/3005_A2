const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "A2",
  user: "postgres",
  password: "1234",
});

client.connect();
module.exports = client;
