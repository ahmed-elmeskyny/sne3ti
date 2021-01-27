//next
import Link from "next/link";
import Image from "next/image";

//style
import styles from "./main.module.scss";

//react-icons
import {IoLogoWhatsapp} from "react-icons/io";
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Main = ()=> {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h1>Bonjour à  <span>صنعتي </span> </h1>
                <h1 className={styles.text}>#1 Marketplace de produits </h1>
                <h1  >100% marocaine</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores delectus
                     quis numquam dolorem amet modi, ducimus vel porro alias saepe 
                    adipisci? Debitis repellendus porro quam alias optio ad minus sint.</p>
                <div className={styles.buttons}>
                   <Link href="/"><a className={styles.product}> Nos Produits <AiOutlineShoppingCart className={styles.icon} ></AiOutlineShoppingCart></a></Link>
                   <Link href="/"><a className={styles.wtsp}> Whatsapp  <IoLogoWhatsapp className={styles.icon}></IoLogoWhatsapp></a></Link>
                </div>
            </div>
            <div className={styles.svgContainer}>
                <Image alt="sne3ti" src="/webshop.svg" width="500px" height="500px" ></Image>
            </div>
        </div>
    )
}

export default Main;