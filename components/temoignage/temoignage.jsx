

//style
import styles from "./temoignage.module.scss";

//components
import TemoignageCard from "../temoignageCard/temoignageCard";
import DynamicTitle from "../dynamicTitle/dynamicTitle";


const Temoignage = () => {

    return (
        <div className={styles.temoignageContainer}>
            <DynamicTitle title="Témoignage"  name="ce que nos clients dit de nous"></DynamicTitle> 
            <div className={styles.temoignage}>
                <TemoignageCard></TemoignageCard>
                <TemoignageCard></TemoignageCard>
                <TemoignageCard></TemoignageCard>
                <TemoignageCard></TemoignageCard>
            </div>
        </div>
    )
}

export default Temoignage ;