import axios from "axios";
const baseUrl = "http://localhost:3004/persons";

const getAllPersons = async () => {
    try {
        return await axios.get(baseUrl);
    } catch (error) {
        console.log(error);
    }
};

const createPerson = async (newObject) => {
    try {
        const response = await axios.post(baseUrl, newObject);
        console.log(newObject);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const removePerson = async (id) => {
    try {
        const response = axios.delete(`${baseUrl}/${id}`);
        console.log("delete server response", response);
        return response;
    } catch (err) {
        console.log(err);
    }
};

const updatePerson = async (id, newObject) => {
    try {
        const response = await axios.put(`${baseUrl}/${id}`, newObject);
        console.log("put server", response);
        return response;
    } catch (error) {
        console.log(error);
    }
};

const personService = {
    getAllPersons,
    createPerson,
    removePerson,
    updatePerson,
};

export default personService;
