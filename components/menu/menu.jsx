//next
import ActiveLink from "../activeLink/activelink";

//style
import styles from "./menu.module.scss";

//react
import { useEffect , useState} from "react";


const Menu = ({isFixed}) => {

    const [Fixed  , setFixed] = useState(false);

    const handleScroll = ()=> {
        const offset=window.scrollY;
        if(offset > 300 ){
          setFixed(false);
        }
        else{
          setFixed(true);
        }
      }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

    return(
        <div className={ Fixed ? styles.menu : styles.menuFixed}>
            { Fixed  ? null : <div className={styles.logo}>
                <p>صنعتي </p>
            </div> }
                    <ul>
                       <li><ActiveLink href="/" activeClassName={styles.activeLink}><a> Acceuil </a></ActiveLink></li>
                       <li><ActiveLink href="/produit" activeClassName={styles.activeLink}><a> Produits </a></ActiveLink></li>
                       <li><ActiveLink href="/damn" activeClassName={styles.activeLink}><a> A Propos </a></ActiveLink></li>
                       <li><ActiveLink href="/damn" activeClassName={styles.activeLink}><a>  Témoignage </a></ActiveLink></li>
                       <li><ActiveLink href="/nani" activeClassName={styles.activeLink}><a> Contact</a></ActiveLink></li>
                    </ul>
        </div>
    )
}

export default Menu;