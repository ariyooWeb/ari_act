import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
function Detail(){
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie)
    }
    useEffect(()=>{
        getMovie();
    },[])
    return(
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.medium_cover_image} />
            <p>{movie.summary}</p>
            <a href={movie.url}>{movie.url}</a>
            <ul>
                {movie.genres.map((g)=><li key={g}>{g}</li>)}
            </ul>
        </div>
        
    )
}
export default Detail;