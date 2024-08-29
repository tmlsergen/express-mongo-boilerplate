import response from '../response/index.js';

export default (callback) => {
    return (req, res, next) => {
        const { error } = callback(req.body);
        if (error) {
            return response.error(res, 400, error.details);
        }
        
        next();
    }
}
