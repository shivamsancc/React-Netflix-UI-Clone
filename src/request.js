const API_KEY = "916c7a98fafaf5962f7999ac7608b552";

const requests = {
    fetchTrendng:`/trending/all/week?api_key=${API_KEY}&language=en-Us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fecthComedyMoviews:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fechRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchScienceFiction:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
      
};

export default requests;