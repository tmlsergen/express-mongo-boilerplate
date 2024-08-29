export default {
    success: (res, data) => {
        return res.status(200).json(data);
    },
    error: (res, code, error) => {
        return res.status(code).json(error);
    },
    created: (res) => {
        return res.status(201).json({});
    },
    updated: (res) => {
        return res.status(204).json({});
    },
    deleted: (res) => {
        return res.status(204).json({});
    }
}