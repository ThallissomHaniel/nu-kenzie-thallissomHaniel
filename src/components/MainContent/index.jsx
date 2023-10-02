import styles from "./MainContent.module.scss"

export const MainContent = ({children}) => {
    return (
        <main className={styles.main}>{children}</main>
    )
}