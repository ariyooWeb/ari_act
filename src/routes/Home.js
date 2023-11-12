import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Header from "../components/Header";
import MovieSlide from "../components/MovieSlide";
import Footer from "../components/Footer";
function Home(){
    const [loading, setLoading] = useState(true);
    const getMovies = async() => {
    const json = await(
        await fetch(`https://yts.mx/api/v2/list_movies.json`)
        ).json();
        setLoading(false);
    }
    useEffect(()=> {
        getMovies()
    },[]);
    return(
        <div className={styles.container}>
            {loading? 
            <h1 className={styles.loader}>loading...</h1>:
            <div>
                <Header />
                <MovieSlide param={"sort_by=download_count"} sort={"인기영화"}/>
                <MovieSlide param={"minimum_rating=8.8"} sort={"최신영화"}/>
                <MovieSlide param={"genre=Family"} sort={"가족영화"}/>
                <MovieSlide param={"genre=Romance"} sort={"로맨스영화"}/>
                <Footer />
            </div>
            }
        </div>
    )
}


export default Home;