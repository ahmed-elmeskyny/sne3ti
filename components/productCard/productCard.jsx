//next 
import Image from "next/image";


//style
import styles from  "./productCard.module.scss";

//react-icons
import { AiOutlineWhatsApp} from "react-icons/ai";

//coponenets

const ProductCard = ({title , image , size , description , price})=> {

    return(
        <div className={styles.productContainer} style={{ backgroundImage : `url(${image})` , backgroundSize:`${size}`}}>
            <div className={styles.productInfo}>
                <h3>{title}</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum optio quod aliquam enim, odit veniam odio, excepturi est at sed ipsa debitis laboriosam, commodi possimus eius cum cupiditate aspernatur quaerat!</p>
                <div className={styles.info}>
                    <span>{price} </span>
                    <div className={styles.commande}>
                         <AiOutlineWhatsApp></AiOutlineWhatsApp>
                         <p>Commander </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;