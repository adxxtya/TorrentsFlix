const tmdbBaseUrl = "https://api.themoviedb.org/3"
const jikanBaseUrl = "https://api.jikan.moe/v4"
const youtubeBaseUrl = "https://www.googleapis.com/youtube/v3"

const tmdbApiKey = "14886848172e5d22c5fa8ebf4576fb40"
const youtubeApiKey = "AIzaSyAZ2iiQhEZsYeboZyUbNiBuz4Ul2faVHCQ"



const requests = {
    // randomSeries: `${tmdbBaseUrl}/tv/${randomId}?api_key=${tmdbApiKey}`,
    randomSeries: `${tmdbBaseUrl}/discover/movie?api_key=${tmdbApiKey}`,
    moviesByPopularity: `${tmdbBaseUrl}${tmdbApiKey}&include_adult=false&language=en-US&page=1`,
    seriesByPopularity: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&without_genres=35`,
    amazonSeriesByNetwork: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&with_networks=1024`,
    netflixSeriesByNetwork: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&with_networks=213`,
    hotstarSeriesByNetwork: `${tmdbBaseUrl}/tv/popular?api_key=${tmdbApiKey}&include_adult=false&language=en-US&page=1&with_networks=3919`,
    animeByPopularity: `${jikanBaseUrl}/top/anime`,
    youtubeTrendingVideos: `${youtubeBaseUrl}/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=20&key=${youtubeApiKey}`
}

export default requests