import styles from "./Footer.module.css";
import mainStyles from "../../styles/main.module.css";

import icon1 from "../../img/icon1.svg";
import icon2 from "../../img/icon2.svg";
import icon3 from "../../img/icon3.svg";
import icon4 from "../../img/icon4.svg";

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={mainStyles.container}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__title}>
                        Contacts
                    </div>
                    <div className={styles.footer__subtitle}>
                        Want to know more or just chat?
                        You are welcome!
                    </div>
                    <button className={styles.footer__btn}>
                        Send message
                    </button>
                    <div className={styles.footer__icons}>
                        <img src={icon1} alt="icon1" />
                        <img src={icon2} alt="icon2" />
                        <img src={icon3} alt="icon3" />
                        <img src={icon4} alt="icon4" />
                    </div>
                    <div className={styles.footer__desc}>
                        Like me on
                        LinkedIn, Instagram, Behance, Dribble
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;