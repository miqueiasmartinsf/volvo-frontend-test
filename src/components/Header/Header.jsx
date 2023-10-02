import styles from './Header.module.css'

const Header = () => {

    return(
        <div className={styles.header}>
            <div className={styles.logo_container}>
                <img src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg" alt="Volvo logo" />
            </div>
            <nav className={styles.nav_list}>
                <ul>
                    <li><a href="">Nossos carros</a></li>
                    <li><a href="">Menu</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header 