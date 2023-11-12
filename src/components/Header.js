import styles from "./partials.module.css";
import {Link} from "react-router-dom";
function Header(){
    return(
        <div className={styles.header}>
            <Link to={"/"}>home</Link>
            <div>리액트 영화 사이트 by 유아름</div>
        </div>
    )
}

export default Header;
