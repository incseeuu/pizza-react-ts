import axios from "axios";

const instance = axios.create({
    baseURL: 'https://63b3fb469f50390584a335c8.mockapi.io/'
})

export const pizzaApi = {
    getPizza: (page: number,categoriesFilter: string,sortBy: string,order: string,search: string) => {
       return  instance.get(`items?page=${page}&limit=8&${categoriesFilter}&${sortBy}&${order}&${search}`)
    }
}
