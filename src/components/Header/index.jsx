import styles from "./Header.module.scss";
import image from "../../assets/Nu Kenzie.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
                <img src={image} alt="logo Nu Kenzie" />
        </header>
    )
}