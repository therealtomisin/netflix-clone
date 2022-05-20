import React, {useState, useEffect} from 'react'
import axios from '../api/axios'
import requests from '../requests'
//import Navbar from './NavBar'


interface Movie {
     backdrop_path?: string,
     original_name?: string
     name?: string,
     title?: string,
     overview?: string
}

const Banner = () => {

    const [movie, setmovie] = useState<Movie>({})
    const baseUrl: string = 'https://image.tmdb.org/t/p/original/'



    useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.findNetflixOriginals)
          const returnMovie = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
          console.log(returnMovie)
          setmovie(returnMovie)
          return request
      }

      fetchData()
    
    }, [])

    const truncate = (str: any, n: number) => {
        return str?.length > n ? str.substr(0, n-1) + '...' : str;
    }

  return (
    <header className='banner'
    style = {
        {
            backgroundSize: 'cover',
            backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
            backgroundPosition: 'center center'
        }
    }
    >
        <div className="banner__contents">
            
            <h1 className='banner__title'>
                {movie.original_name || movie.name || movie.title}
            </h1>

            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>

            <h1 className='banner__description'>
                {truncate(movie.overview, 150)}
            </h1>
        </div>

        <div className='banner__fadeBottom' />
    </header>
  )
}

export default Banner