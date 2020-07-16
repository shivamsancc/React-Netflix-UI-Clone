import axios from "axios";

/*Base Url to make API Requests*/
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance;