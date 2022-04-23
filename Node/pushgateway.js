const client = require("prom-client");
let gateway = new client.Pushgateway("http://3.15.215.183:9091");

//All gateway requests can have groupings on it
gateway
  .pushAdd({ jobName: "test_node", groupings: { key: "value", provider: "gabriel" } })
  .then((resp, body) => {
    /* ... */
  })
  .catch((err) => {
    /* ... */
  });

// It's possible to extend the Pushgateway with request options from nodes core
// http/https library. In particular, you might want to provide an agent so that
// TCP connections are reused.
// gateway = new client.Pushgateway('http://3.15.215.183:9091', {
//   timeout: 5000, //Set the request timeout to 5000ms
//   agent: new http.Agent({
//     keepAlive: true,
//     keepAliveMsec: 10000,
//     maxSockets: 5,
//   }),
// });
