import styles from "./Intro.module.css";
import mainStyles from "../../styles/main.module.css";
import introImg from "../../img/BSPP2266.png"

const Intro = () => {
    return (
        <section className={styles.intro}>
            <div className={mainStyles.container}>
                <div className={styles.intro__content}>
                    <div className={styles.intro__text}>
                        <div className={styles.intro__text1}>
                            Denis Novik
                        </div>
                        <div className={styles.intro__text2}>
                            UX | UI designer
                            24 years old, Minsk
                        </div>
                        <div className={styles.intro__text3}>
                            <p>
                                RU 
                            </p>
                            <span>
                             | ENG
                            </span>
                        </div>
                        
                    </div>
                    <div className="intro__img">
                        <img src={introImg} alt="Intro" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Intro;