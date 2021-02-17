

//style
import styles from "./dynamicTitle.module.scss";


const DynamicTitle = ({title , name , description}) => {

    return (
        <div className={styles.titleContainer}>
                <div className={styles.title}>
                    <h6>{title}</h6>
                    <h2>{name}</h2>
                </div>
                {/* <div className={styles.text}>
                    <p>{description}</p>
                </div> */}
            </div>
    )
}

export default DynamicTitle;