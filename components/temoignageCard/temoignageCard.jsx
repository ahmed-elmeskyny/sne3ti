

//style
import styles from "./temoignageCard.module.scss";


//react-icons
import {FaQuoteLeft} from "react-icons/fa";
import {FiFacebook} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";


const TemoignageCard = () => {

    return (
        <div className={styles.temoignageCard}>
                <div className={styles.quote}>
                    <FaQuoteLeft></FaQuoteLeft>
                </div>
                <div className={styles.review}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, incidunt. Vitae expedita adipisci numquam officia et temporibus eaque aperiam. Harum accusamus vero mollitia, perspiciatis modi necessitatibus aperiam nihil porro neque.</p>
                </div>
                <div className={styles.name}>
                    <h4>Douae Tchorbo</h4>
                    <div className={styles.icon}>
                        <FiFacebook></FiFacebook>
                        <FiInstagram></FiInstagram>
                    </div>
                </div>
               
        </div>
    )
};

export default TemoignageCard;