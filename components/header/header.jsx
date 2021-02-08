//next
import Image from "next/image";
import ActiveLink from "../activeLink/activelink";

//style
import styles from "./header.module.scss";

//react-icons
import {FiFacebook} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {AiOutlineShoppingCart} from 'react-icons/ai';

//components
import Menu from "../menu/menu";



const Header = ( ) => {

      

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <Image alt="sne3ti logo" src="/logo.png" width={50} height={80}></Image>
            </div>
            <Menu ></Menu>
            <div className={styles.socialContainer}>
                <div className={styles.social}>
                    <AiOutlineShoppingCart className={styles.icon}></AiOutlineShoppingCart>
                    <FiFacebook className={styles.icon} ></FiFacebook>
                    <FiInstagram className={styles.icon} ></FiInstagram>
                </div>
            </div>
        </div>
    )
}

export default Header;