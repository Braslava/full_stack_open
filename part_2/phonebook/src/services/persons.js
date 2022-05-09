import axios from "axios";
const baseUrl = "http://localhost:3004/persons";

const getAllPersons = async () => {
    try {
        return await axios.get(baseUrl);
        // setPersons(response.data);
        // console.log(response.data);
    } catch (error) {
        console.log(error);
    }
};

const createPerson = async (newObject) => {
    try {
        const response = await axios.post(
            baseUrl,
            newObject
        );
        console.log(newObject);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

// const update = (id, newObject) => {
//     return axios.put(`${baseUrl}/${id}`, newObject);
// };

const personService = {
    getAllPersons,
    createPerson,
};

export default personService;
