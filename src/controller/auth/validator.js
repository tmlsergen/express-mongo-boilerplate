import joi from 'joi';

export default {
    register: (payload) => {
        return joi.object({
            email: joi.string().email().required(),
            password: joi.string().required(),
            name: joi.string().required(),
            role: joi.string().required()
        }).validate(payload);
    },
    login: (payload) => {
        return joi.object({
            email: joi.string().email().required(),
            password: joi.string().required()
        }).validate(payload);
    }
}