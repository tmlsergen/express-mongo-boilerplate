import express from 'express';
import controller from './controller.js';
import validator from './validator.js';
import { validate } from '../../middleware/validator.js';

const router = express.Router();

router.post('/login', validate(validator.login), controller.login);
router.post('/register', validate(validator.register), controller.login);

export default router;
