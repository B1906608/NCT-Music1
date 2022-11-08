import { faUser, faLock, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cls from "classnames";
import styles from "../../scss/player/SignUp.module.scss";

export default function Signup() {  
    return (
        <div className={styles["container"]}>
            <div className={styles["screen"]}>
                <div className={styles["screen__content"]}>
                    <form className={styles["login"]}>
                        <div className={styles["login__field"]}>
                            <FontAwesomeIcon icon={faUser} className={styles["login__icon"]} />
                            <input type="text" className={styles["login__input"]} placeholder="User name / Email"/>
                        </div>
                        <div className={styles["login__field"]}>
                            <FontAwesomeIcon icon={faLock} className={styles["login__icon"]} />
                            <input type="password" className={styles["login__input"]} placeholder="Password"/>
                        </div>
                        <button className={cls(styles["button"], styles["login__submit"])}>
                            <span className={styles["button__text"]}>Sign Up Now</span>
                            <FontAwesomeIcon icon={faChevronRight} className={styles["button__icon"]} />
                        </button>				
                    </form>
                    <div className={styles["social-login"]}>
                        <h3>log in via</h3>
                        <div className={styles["social-icons"]}>
                            <FontAwesomeIcon icon={faInstagram} className={styles["social-login__icon"]} />
                            <FontAwesomeIcon icon={faFacebook} className={styles["social-login__icon"]} />
                            <FontAwesomeIcon icon={faTwitter} className={styles["social-login__icon"]} />
                        </div>
                    </div>
                </div>
                <div className={styles["screen__background"]}>
                    <span className={cls(styles["screen__background__shape"],styles["screen__background__shape4"])}></span>
                    <span className={cls(styles["screen__background__shape"],styles["screen__background__shape3"])}></span>		
                    <span className={cls(styles["screen__background__shape"],styles["screen__background__shape2"])}></span>
                    <span className={cls(styles["screen__background__shape"],styles["screen__background__shape1"])}></span>
                </div>		
            </div>
        </div>
    );
}