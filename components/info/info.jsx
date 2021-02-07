//style
import styles from "./info.module.scss";

//react-icons
import {FaShippingFast} from "react-icons/fa";
import {RiRefund2Line} from "react-icons/ri";
import {BiSupport} from "react-icons/bi";
import {FaHandHoldingHeart} from "react-icons/fa";


const Info = () => {

    return (
    <div className={styles.why}>
        <h1 className={styles.title}>Pourquoi nous choisir ?</h1>
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <FaShippingFast className={styles.icon}></FaShippingFast>
                <h1>Livraison gratuite -- oujda</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisi sint laboriosam. Alias, quisquam.</p>
            </div>
            <div className={styles.info}>
                <RiRefund2Line className={styles.icon}></RiRefund2Line>
                <h1>100% Remboursement</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisi sint laboriosam. Alias, quisquam.</p>
            </div>
            <div className={styles.info}>
                <BiSupport className={styles.icon}></BiSupport>
                <h1>Support Online 24h/7jr</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisi sint laboriosam. Alias, quisquam.</p>
            </div>
            <div className={styles.info}>
                <FaHandHoldingHeart className={styles.icon}></FaHandHoldingHeart>
                <h1>Qualité que la Quantité</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisi sint laboriosam. Alias, quisquam.</p>
            </div>
        </div>
    </div>
    )
}

export default Info;