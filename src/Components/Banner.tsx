// import { request } from 'http'
import React, {useState, useEffect} from 'react'
import axios from '../api/axios'
import requests from '../requests'


// interface Movies {
//     id: number,
//     name: string,
//     image: string
//     poster_path: string
//     original_title: string
// }
interface Movie {
  mov: any
}

const Banner = () => {

    const [movie, setmovie] = useState<Movie[]>([])
    const baseUrl: string = 'https://image.tmdb.org/t/p/original/'



    useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.findNetflixOriginals)
          console.log([request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]])
          setmovie([request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]])
          return request
      }
    
    }, [])

    // const [movie, setmovie] = useState<Movie>({
    //     backdrop_path: "",
    //     name: ''
    // })
    // const baseUrl: string = 'https://image.tmdb.org/t/p/original/'

    
    // useEffect(() => {
    //   async function fetchdata(){
    //       const request = await axios.get(requests.findNetflixOriginals)
    //       setmovie({...movie, backdrop_path: request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]})
    //       console.log(movie.backdrop_path)
    //       console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
    //       console.log(`${baseUrl}${movie.backdrop_path}`)
    //       return request; 
    //     }
    //     fetchdata()
    // }, [])
    // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
    // ?.backdrop_path
    //[Math.floor(Math.random() * request.data.results.length - 1)].backdrop_path

  return (
    <header className='banner'
    style = {
        {
            backgroundSize: 'cover',
            backgroundImage: `url(${baseUrl})`,
            backgroundPosition: 'center center'
        }
    }
    >

        <div className="banner__content">
            {movie}
        </div>

    </header>
  )
}

export default Banner