const api_key = 'ba0a3ae0637914b454a10c323e74d13e'

const requests = {
    findAction: `/discover/movie?api_key=${api_key}&with_genres=28`,
    findDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
    findHorror: `/discover/movie?api_key=${api_key}&with_genres=27`,
    findRomance: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    findComedy: `/discover/movie?api_key=${api_key}&with_genres=35`,
    findTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US&page=1`,
    findTrending: `/trending/all/day?api_key=${api_key}`,
    findNetflixOriginals: `/discover/tv?api_key=${api_key}&networks=213`
     
}

export default requests;