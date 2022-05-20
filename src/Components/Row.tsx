import React, {useState, useEffect} from 'react'
import axios from '../api/axios'
// import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'

// const movieTrailer = require( 'movie-trailer' )

interface Props {
    title: string
    fetchUrl: string
    isLargeRow: boolean
}

interface Movies {
    id: number,
    name: string,
    image: string
    poster_path: string
    original_title: string
    backdrop_path: string
}

const Row = ({title, fetchUrl, isLargeRow}: Props) => {

    const [movies, setmovies] = useState<Movies[]>([])
    const baseUrl: string = 'https://image.tmdb.org/t/p/original/'
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }}
        
        useEffect(() => {
          async function fetchData() {
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request
          }
          fetchData()
        }, [fetchUrl])
        
        return (
            <div className='row'>

        <h2 className='row__title'>
            {title}
        </h2>
    <div className= 'row__posters' >
        {movies.map((movie)=>(
            <img  className={`row__poster ${isLargeRow && 'row__posters__large'}`} src={`${baseUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.original_title} />
        ))}
    </div>
    {/* https://www.youtube.com/watch?v=yj-DaTDUIgY */}
        <Youtube videoId={'eOrNdBpGMv8'} opts={opts} />
    

    </div>
  )
}

export default Row
        // const [trailerUrl, setTrailerUrl] = useState<string>('')
    
        // const handleClick = (movie: {name: string, url: string}) => {
        //     if (trailerUrl) {
        //         setTrailerUrl('')
        //     } else {
        //        movieTrailer('Iceans Eleven', {id: true, multi: true})
        //        .then((response: any) => console.log((response)))
        //     }
        // }