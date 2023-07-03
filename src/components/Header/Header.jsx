import styles from "./Header.module.css";
import mainStyles from "../../styles/main.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={mainStyles.container}>
                <nav className={styles.header__nav}>
                    <ul>
                        <li>
                            <a className={styles.header__nav_activebtn} href="#">Home</a>
                        </li>
                        <li>
                            <a href="#2">About me</a>
                        </li>
                        <li>
                            <a href="#">Skills</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;