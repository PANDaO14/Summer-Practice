import styles from "./About.module.css";
import mainStyles from "../../styles/main.module.css";

const About = () => {
    return (
        <section  className={styles.about}>
            <div className={mainStyles.container}>
                <div className={styles.about__text}>
                    <div className={styles.about__title}>
                        About me
                    </div>
                    <div className={styles.about__desc}>
                        Hi, I'm Denis – UX/UI designer from Minsk.
                        I'm interested in design and everything connected with it.

                        I'm studying at courses "Web and mobile design 
                        interfaces" in IT-Academy.
                        
                        Ready to implement excellent projects
                        with wonderful people.
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;