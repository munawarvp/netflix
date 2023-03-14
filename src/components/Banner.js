
import React, { useEffect, useState } from 'react';
import requests from '../requests';
import axios from '../axios';
import './style.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchData();
    }, []);
  console.log(movie);
  return (
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center"
        }}
    >
        <div class="banner-contents">
            <h1 className='banner-title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
            </div>
            <h1 className="banner-description">{movie.overview}</h1>
        </div>
        
        <div className="banner-fade" />
    </header>
  )
}

export default Banner