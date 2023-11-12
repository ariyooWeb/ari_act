import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Popularity from "../components/Popularity";
import Korean from "../components/Korean";
import Family from "../components/Family";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Home(){
    const settings = {
        arrows: true, // 양 끝 화살표 생성여부
        dots: false, // 슬라이더 아래에 슬라이드 개수를 점 형태로 표시
        infinite: true, // 슬라이드가 맨 끝에 도달했을 때 처음 슬라이드를 보여줄지 여부
        slidesToShow: 6, // 화면에 한번에 표시할 슬라이드 개수 설정
        slidesToScroll: 1, // 옆으로 스크롤할 때 보여줄 슬라이드 수 설정
        speed: 500, // 슬라이드 넘길 때 속도
        autoplay: true, // 슬라이드를 자동으로 넘길지 여부
        autoplaySpeed: 3000, // 자동으로 넘길 시 시간 간격
      }
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await(
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
        console.log(movies)
    }
    useEffect(()=> {
        getMovies()
    },[]);
    return(
        <div className={styles.container}>
        {loading? 
        <h1 className={styles.loader}>loading...</h1>:
        <div>
            <Popularity />
            <h1 className={styles.subTitle}>최신순</h1>
            <div className={styles.movies}>
                <Slider {...settings}>
                    {movies.map((movie,index) =>
                        (<Movie key={index} id={movie.id} year={movie.year} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} date={movie.date_uploaded}/>)
                    )}
                </Slider>
            </div>
            <Korean />
            <Family />
        </div>
        }
        </div>
    )
}


export default Home;