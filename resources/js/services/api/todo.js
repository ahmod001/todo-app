import axios from "axios"

export const fetchTodoList = async () => {
    const res = await axios('/todos')
    return res.data;
}