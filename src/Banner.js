import React, { useEffect,useState } from 'react';
import axios from './axios';
import request from './request';
import './css/banner.css'


function Banner(){

    const[movie, Setmovie] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            //Code
            const requests = await axios.get(request.fetchNetflixOriginals ); 
            Setmovie(
                requests.data.results[
                    Math.floor(Math.random()*requests.data.results.length -1)
                ]    
            );
            return requests;
            // console.log(requests.data.results[Math.floor(Math.random()*requests.data.results.length -1)]);
            // Math.floor(Math.random()*requests.data.results.length -1)
        }   
        fetchData();
    },[]);
    console.log(movie);
    function truncate(str, n){
        return str?.length>n?str.substr(0,n  -  1)+"...":str;
    }
    return(
        <header className="banner"
            style={{
              backgroundSize:"cover",
              backgroundImage:`url(
                  "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`  ,
              backgroundPosition:"center center"
            }}
        >
            <div className="banner-contents">
                <h1 className="banner-title">{movie?.title|| movie?.name || movie?.orignal_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-desction">
                    {/* {movie?.overview} */}
                    {truncate(movie?.overview,150)}
                </h1>
                    {/* Descrition */}



            </div>  
            <div className="banner-fadebottom"></div>         
        </header>
    )
}

export default Banner