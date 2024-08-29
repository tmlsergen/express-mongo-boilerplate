import winston, { log } from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.colorize({ all: true }),
    ),
    transports: [
        new winston.transports.File({ filename: 'src/logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'src/logs/combined.log' }),
    ],
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export default {
    info: (message) => {
        logger.info(message);
    },
    error: (message) => {
        logger.error(message, (err, level, message, meta) => {
            if (err) {
                return err;
            }

            return { level, message, meta };
        });
    },
    warn: (message) => {
        logger.warn(message);
    },
    debug: (message) => {
        logger.debug(message);
    },
}