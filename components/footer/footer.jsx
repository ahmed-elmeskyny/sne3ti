//next
import Image from "next/image";
import Link from "next/link";
import { icons } from "react-icons/lib";

//style
import styles from "./footer.module.scss";

//react-icons
import {RiFacebookLine} from "react-icons/ri";
import {IoLogoInstagram} from "react-icons/io";
import {FaCopyright, FaRegCopyright} from "react-icons/fa";


const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.logo}>
                <Image alt="sne3ti logo" src="/logo.png" width={100} height={180}></Image>
                <div className={styles.text}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate unde, laborum, numquam quam repellat modi reprehenderit a dolor accusantium aspernatur saepe id laudantium. Omnis dolore dolores consequuntur ad assumenda aliquam.</p>
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.link}>
                    <h2>Contact</h2>
                    <p>Maroc -- 60000 </p>
                    <p>(+212 ) 0652874901 </p>
                    <p>sne3ti@gmail.com</p>
                    <div >
                        <RiFacebookLine className={styles.icon}></RiFacebookLine>
                        <IoLogoInstagram className={styles.icon}></IoLogoInstagram>
                    </div>
                </div>
                <div className={styles.link}>
                    <h2>Shop</h2>
                    <p>Couture</p>
                    <p>Plat Traditionnel</p>
                    <p>lorem ipsom </p>
                    <p>ipsom Lorem damn </p>
                </div>
                <div className={styles.link}>
                    <h2>Lien Rapides</h2>
                    <p> A propos </p>
                    <p>Nos Produit</p>
                    <p> FAQs </p>
                    <p>Contact</p>
                </div>
                <div className={styles.link}>
                    <h2>Support</h2>
                    <p> Confidentialité </p>
                    <p>Conditions</p>
                    <p>Signaler un bug</p>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p>Copyright</p>
                <FaCopyright style={{ color: "#dec481"}}></FaCopyright>
                <p className={styles.name}>| صنعتي </p>
                <p>By <span><a href="http://ahmed-elmeskyny.herokuapp.com/"  target="_blank">Ahmed El Meskyny</a></span></p>
            </div>
        </div>
    )
}
export default Footer;