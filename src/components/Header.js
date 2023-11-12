import styles from "./partials.module.css";
import {Link} from "react-router-dom";
import Logo from "../img/logo4.png";

function Header(){
    return(
        <div className={styles.header}>
            <Link to={"/"}><img src={Logo} alt="logo" className={styles.logo}/></Link>
        </div>
    )
}

export default Header;
