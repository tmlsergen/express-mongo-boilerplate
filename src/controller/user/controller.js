import response from '../../response/index.js';

export default {
    getUsers: async (req, res) => {
        try {
            response.success(res, 200, 'Get all users');
        } catch (error) {
            response.error(res, 500, error);
        }
    },
    createUser: async (req, res) => {
        try {
            response.created(res);
        } catch (error) {
            response.error(res, 500, error);
        }
    }
}