import styles from "./Portfolio.module.css";
import mainStyles from "../../styles/main.module.css";

import img1 from "../../img/img1.png";
import img2 from "../../img/reebok_web.png";
import img3 from "../../img/reebok2.png";


const Portfolio = () => {
    return (
        <section className={styles.portfolio}>
            <div className={mainStyles.container}>
                <div className={styles.portfolio__content}>
                    <div className={styles.portfolio__title}>
                        Portfolio
                    </div>
                    <figure className={styles.portfolio__img}>
                        <img src={img1} alt="img1" />
                        <figcaption className={styles.portfolio__img_desc}>
                            Online fashion store - Homepage
                        </figcaption>
                    </figure>
                    <figure className={styles.portfolio__img}>
                        <img src={img2} alt="img2" />
                        <figcaption className={styles.portfolio__img_desc}>
                            Reebok Store - Concept
                        </figcaption>
                    </figure>
                    <figure className={styles.portfolio__img}>
                        <img src={img3} alt="img3" />
                        <figcaption className={styles.portfolio__img_desc}>
                            Braun Landing Page - Concept
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;