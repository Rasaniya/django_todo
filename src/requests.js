const APIKEY = "0556ff5f6ae4fca03d452fa8ad26c9df";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie/?api_key=${APIKEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie/?api_key=${APIKEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie/?api_key=${APIKEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie/?api_key=${APIKEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie/?api_key=${APIKEY}&with_generes=99`,
}

export default requests;