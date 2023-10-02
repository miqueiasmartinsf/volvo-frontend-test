import styles from './VehicleCard.module.css'



const VehicleCard = ({data}) => {

    return(
        <div className={styles.card_container}>
            <div className={styles.card_info}>
                <p className={styles.car_bodytype}>{data.bodyType.toUpperCase()}</p>
                <span><p className={styles.model_name}>{data.modelName}</p> <p className={styles.model_type}>{data.modelType}</p></span>
            </div>
            <div className={styles.img_container}>
                <img src={data.imageUrl} alt="" />
            </div>
            <div className={styles.options}>
                <a href="">Conheça</a>
                <a href="">Reserve</a>
            </div>
        </div>
    )
}


export default VehicleCard