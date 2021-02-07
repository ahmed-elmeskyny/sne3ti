//next
import Link from "next/link";
import Image from "next/image";

//style
import styles from "./featured.module.scss";

//react-icons
import {IoLogoWhatsapp} from "react-icons/io";
import {FaShippingFast} from "react-icons/fa";
import {RiRefund2Line} from "react-icons/ri";
import {FaHandHoldingHeart} from "react-icons/fa";


const Featured = ()=>{

    return(
        <>
        <div className={styles.featuredContainer}>
            <div className={styles.featuredImageContainer}>
                <img alt="nani" src="/jelabaFeatured1.jpg" width="100%" height="100%"></img>
            </div>
            <div className={styles.description}>
                <h3>Jelaba traditionnel pour Femme</h3>
                 <p><span> Prix: </span> 1000 DH  <span>1500 DH </span></p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam earum facere ratione impedit illo. Veniam quidem voluptates facere est aliquid. Quibusdam inventore aperiam sequi quam earum repudiandae dolore excepturi.</p>
                 <div className={styles.icons}>

                     <div className={styles.icon}>
                         <FaShippingFast></FaShippingFast>
                         <span>Gratuite</span>
                    </div>

                    <div className={styles.icon}>
                         <RiRefund2Line></RiRefund2Line>
                         <span>Rembouresement</span>
                    </div>

                    <div className={styles.icon}>
                         <FaHandHoldingHeart></FaHandHoldingHeart>
                         <span>Qualite</span>
                    </div>



                 </div>
                 <h5>Offre limitée </h5>
                 <button>Commander  sur Whatsapp <IoLogoWhatsapp></IoLogoWhatsapp> </button>
            </div>
            <div className={styles.productImageContainer}>
                <div className={styles.productOne}>
                    {/* <img alt="jelaba" src="/jelabaHomme.jpg"></img> */}
                </div>
                <div className={styles.productTwo}>
                    {/* <img alt="jelaba" src="/jelabaFeatured.jpg"></img> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default Featured;