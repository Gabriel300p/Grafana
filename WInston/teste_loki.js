const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const options = {
  transports: [
    new LokiTransport({
      host: "http://3.131.77.133/:3100",
    }),
  ],
};
const logger = createLogger(options);

logger.debug({ message: "test", labels: { key: "value" } });
