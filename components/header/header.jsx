//next
import Image from "next/image";
import Link from "next/link";
import ActiveLink from "../activeLink/activelink";

//style
import styles from "./header.module.scss";

//react-icons
import {FiFacebook} from "react-icons/fi";
import {FiInstagram} from "react-icons/fi";
import {AiOutlineShoppingCart} from 'react-icons/ai';


const Header = ( ) => {

    return (
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <Image alt="sne3ti logo" src="/logo.png" width={50} height={80}></Image>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menu}>
                    <ul>
                       <li><ActiveLink href="/" activeClassName={styles.activeLink}><a> Acceuil </a></ActiveLink></li>
                       <li><ActiveLink href="/produit" activeClassName={styles.activeLink}><a> Produits </a></ActiveLink></li>
                       <li><ActiveLink href="/damn" activeClassName={styles.activeLink}><a> A Propos </a></ActiveLink></li>
                       <li><ActiveLink href="/nani" activeClassName={styles.activeLink}><a> Contacts</a></ActiveLink></li>
                    </ul>
                </div>
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