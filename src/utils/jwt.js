import jwt, { verify } from 'jsonwebtoken';
import config from '../config/index.js';

export default {
    sign: (payload) => {
        return jwt.sign(payload, config.jwtSecret, { expiresIn: '1h' });
    },
    verify: (token) => {
        return verify(token, config.jwtSecret, (err, decoded) => {
            if (err) {
                return err;
            }

            return decoded;
        });
    }
}