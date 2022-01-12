const API_KEY = "66b4ce59335edf99fe51e1d41ed9cb79";

const requests =  {
    fetchTest : `/movie/550?api_key=${API_KEY}`,
    fetchPopular : `/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`,
    fetchFamilyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=fr-FR&sort_by=popularity.desc`,
    fetchGenre : `/genre/movie/list?api_key=66b4ce59335edf99fe51e1d41ed9cb79&language=en-US`
}

export default requests; 