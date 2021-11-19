import React, {useState, useEffect} from 'react'
import './Banner.css'
import axios from './axios'
import Requests from './Requests'

function Banner() {

    const [movie, setMovie] = useState()

   async function fetchMovie () {
        const request = await axios.get(Requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[Math.floor(Math.random() * request.data.results.length-1)]
            );
        return request
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    console.log(movie)
    function smallDesc(str, nb) {
        return str?.length > nb ? str.substr(0, nb) + '...' : str;
    }
    return (
        <header className="Banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",

        }}>
        <div className="banner__contents">
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="banner__buttons">
                <button className="banner__button">play</button>
                <button className="banner__button">My list</button>
            </div>

            <h1 className="banner__discrption">
                {
                smallDesc(movie?.overview, 150)}
            </h1>

        </div>
        <div className="banner__fadeBotom"></div>
    </header>
    )
}

export default Banner
