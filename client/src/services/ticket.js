import axios from "axios";
const TICKET = "http://localhost:3000/ticket";

const add = async (data) => {
    try{
        const response = await axios.post(`${TICKET}/add`, data);
        return response.data;
    } catch (error){
        console.error('Error adding ticket: ', error);
        throw error;
    }
};

const ticketService = {
    add,
};

export default ticketService;