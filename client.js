const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "192.168.247.206", // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    //conn.write("Hello from client!");
    console.log("Successfully connected to game server");
    conn.write("Name: SHT");
    conn.write("Say: hissssss")
  });


  return conn;
};

module.exports = connect;