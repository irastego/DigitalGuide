import axios from 'axios';

const API_URL = 'http://localhost:8080/api/properties';

export const propertyService = {
    createProperty: (data) => axios.post(API_URL, data),

    getAllProperties: () => axios.get(API_URL),

    getPropertyBySlug: (slug) => axios.get(`${API_URL}/${slug}`)

};