const axios = require("axios");

class Serie{

    // Métodos controladores
    async searchById(id){
        let res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=210d6a5dd3f16419ce349c9f1b200d6d&language=en-US`);
        return res.data;
     }
     

}

let seriesController = new Serie();
module.exports = seriesController;