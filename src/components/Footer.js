import styles from "./partials.module.css";
function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.information}>
                <h4 className={styles.footerTitle}>영화정보를 얻을 수 있는 반응형 앱(리액트)</h4>
                <div className={styles.footerAddress}>
                    <p>만든이 : ariyoo.web</p>
                    <p>메일 : ariyoo.web@gmail.com</p>
                    <p>phone : 010-5761-7473</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;