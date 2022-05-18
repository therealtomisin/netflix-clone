import React, {useState, useEffect} from 'react'
import axios from '../api/axios'

interface Props {
    title: string
    fetchUrl: string
}

interface Movies {
    id: number,
    name: string,
    image: string
    poster_path: string
    original_title: string
}

const Row = ({title, fetchUrl}: Props) => {

    const [movies, setmovies] = useState<Movies[]>([])
    const baseUrl: string = 'https://image.tmdb.org/t/p/original/'

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
    <div className="row__posters">
        {movies.map((movie)=>(
            <img className='row__poster' src={`${baseUrl}${movie.poster_path}`} alt={movie.original_title} />
        ))}
    </div>

    </div>
  )
}

export default Row