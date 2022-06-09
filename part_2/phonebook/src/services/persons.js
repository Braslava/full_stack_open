import axios from "axios";
//const baseUrl = "https://intense-basin-30125.herokuapp.com/api/persons";
const baseUrl = "/api/persons";
//const baseUrl = "http://localhost:3001/api/persons";

const getAllPersons = async () => {
    try {
        return await axios.get(baseUrl);
    } catch (error) {
        console.log(error);
    }
};

const createPerson = async (newObject) => {
    //try {
        const response = await axios.post(baseUrl, newObject);
        // console.log("new person", newObject);
        console.log("response", response.data);
        return response.data;
    // } catch (error) {
    //     console.log(error);
    // }
};

// const createPerson = (newObject) => {
//     console.log(newObject);
//     const request = axios.post(baseUrl, newObject);
//     return request.then((response) => response.data);
// };

const removePerson = async (id) => {
    try {
        const response = axios.delete(`${baseUrl}/${id}`);
        return response;
    } catch (err) {
        console.log(err);
    }
};

const updatePerson = async (id, newObject) => {
  //  try {
        const response = await axios.put(`${baseUrl}/${id}`, newObject);
        console.log("response data", response.data);
        return response.data;
    // } catch (error) {
    //     console.log(error);
        
    // }
};

const personService = {
    getAllPersons,
    createPerson,
    removePerson,
    updatePerson,
};

export default personService;
