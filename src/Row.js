import React, {useEffect, useState} from 'react'
import axios from './app/fetcher/axios'
import "./Row.css"

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData()
    }, [fetchUrl])

    // console.log(movies)
    const imgUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
            {
                
                movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                    <img 
                        key={movie.id}
                        src={`${imgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt="" 
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    />
                    )
                ))
            }
            </div>
        </div>
    )
}

export default Row
