import styles from './Main.module.css'

//Components
import ShowCase from '../ShowCase/ShowCase'

const Main = () => {

    return(
        <div className={styles.main_container}>
            <ShowCase/>
        </div>
    )
}

export default Main