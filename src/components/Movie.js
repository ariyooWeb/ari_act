import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
function Movie({id, year, coverImg, title, summary, genres, date}){
  return(
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}><div><img src={coverImg} alt={title} className={styles.movie__img} /></div></Link>
      <div>
          <h2 className={styles.movie__title}>{title}</h2>
          {/* <h3 className={styles.movie__year}>{year}</h3>
          <h4>{date}</h4> */}
          {/* <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p> */}
          <ul className={styles.movie__genres}>
            {genres && genres.map((g) => <li key={id}>{g}</li>)}
          </ul>
      </div>
    </div>
  )
}
Movie.proTypes = {
  id:PropTypes.number.isRequired,
  coverImg:PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;