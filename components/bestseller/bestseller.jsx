//next


//style
import styles from "./bestseller.module.scss";


//components
import DynamicTitle from "../dynamicTitle/dynamicTitle";
import ProductCard from "../productCard/productCard";


const BestSeller = () => {

    return (
        <div className={styles.bestSellerContainer}>
            <DynamicTitle title="En vedette" name="Meilleurs Ventes" ></DynamicTitle>
            <div className={styles.productsContainer}>
                 <ProductCard 
                 title="Couscous maroccain" 
                 price="300 DH" 
                 image="/couscous.jpg" 
                 size="180%">
                 </ProductCard>

                 <ProductCard 
                 title="bestilla marocain Fruit de mer" 
                 price="500 DH" image="/bastilla.jpg" 
                 size="175%">
                 </ProductCard>

                 <ProductCard 
                 title="jelaba traditionel pour Homme" 
                 price="1000 DH" 
                 image="/jelabaHomme1.jpg" 
                 size="180%">
                 </ProductCard>
            </div>
        </div>
    )
}

export default BestSeller;