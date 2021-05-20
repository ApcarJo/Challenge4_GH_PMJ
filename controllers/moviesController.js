const axios = require("axios");

class Pelicula{

    // Métodos controladores
    async findTopRated(){
        let res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&page=1');
        return res.data;
    }

    async searchById(id){
        let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`)
        return res.data;
    }

    // Method for "Getting movie by title"
    async searchByTitle(title){
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US&query=${title}&page=1&include_adult=false`)
        return res.data;
    }

    async searchByGenre(code){
        // let res = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US');
        let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code}`);
        // https://api.themoviedb.org/3/discover/movie?api_key=210d6a5dd3f16419ce349c9f1b200d6d&with_genres=${code}
        return res.data;
    }

}

let moviesController = new Pelicula();
module.exports = moviesController;