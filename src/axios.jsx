import axios from 'axios';


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", //this is the commone part for each movie (base )
    
});

// instance.get('movie/top_rated'); //get method it will take the base method and add with the instance send to request. 

export default instance;
