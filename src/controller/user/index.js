import express from 'express';
import controller from './controller.js';
import validator from './validator.js';
import { validate } from '../../middleware/index.js';

const router = express.Router();

router.get('/', controller.getUsers);
router.post('/', validate(validator.createUser), controller.createUser);