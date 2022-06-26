import axios from 'axios';
const baseUrl = `http://localhost:3000`;

const app = {
    get: async (url, token, params, filter) => {
        const response = await axios.request({
            headers: {
                token: token,
            },
            method: "GET",
            url: `${baseUrl}/${url}?${params}=${filter}`
        });
        return response;
    },

    getOne: async (url, token) => {
        const response = await axios.request({
            headers: {
                token: token,
            },
            method: "GET",
            url: `${baseUrl}/${url}`
        })

        return response;
    },

    post: async (url, data, token) => {
        const response = await axios({
            headers: {
                token: token,
            },
            method: "POST",
            url: `${baseUrl}/${url}`,
            data: data
        });

        return response;
    },

    put: async (url, data, token) => {
        const response = await axios.request({
            headers: {
                token: token,
            },
            method:"PUT",
            url: `${baseUrl}/${url}`,
            data: data
        });

        return response;
    },

    delete: async (url, token) => {
        const response = await axios.request({
            headers: {
                token: token,
            },
            method: 'DELETE',
            url: `${baseUrl}/${url}`
        });

        return response;
    }
};

export default app;