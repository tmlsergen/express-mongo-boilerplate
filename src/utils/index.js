import jwt from './jwt.js'
import logger from './logger.js'
import mongo from './mongo.js'

export default {
    jwt,
    logger,
    db: mongo,
}