import axios from "axios"

export const fetchTodoList = async () => {
    const res = await axios('/todos')
    return res.data;
}


export const createTodo = async (data) => {
    const res = await axios.post(`/todos`, data)
    return res.data;
}


export const deleteTodo = async (id) => {
    const res = await axios.delete(`/todos/${id}`)
    return res.data;
}