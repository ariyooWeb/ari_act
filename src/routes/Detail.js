import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";
import Header from "../components/Header";
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
            <Header />
            <div className={styles.container}>
                <div>
                    <img src={movie.large_cover_image} className={styles.cover}/>
                </div>
                <div className={styles.contents}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <p className={styles.year}><span>{movie.year}년</span> | <span>{movie.runtime}분</span></p>
                    <div className={styles.genres}>{movie.genres && movie.genres.map((g,index)=><span key={g}>{index==0? null : "/"}{g}</span>)}</div>
                    <p className={styles.desc}>{movie.description_full}</p>
                    <div className={styles.arrow}>movie website▼</div>
                    <a href={movie.url} className={styles.url}>{movie.url}</a>
                </div>
            </div>
        </div>
        
        
    )
}
export default Detail;