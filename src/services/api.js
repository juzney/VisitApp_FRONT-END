import axios from 'axios'


const api = axios.create({

	baseURL: 'https://ppvisitapp.herokuapp.com/'
})

export default api;
