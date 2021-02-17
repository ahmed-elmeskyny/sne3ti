//next
import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';


//components
import Layout from "../components/layout/layout";
import Main from "../components/main/main";
import Info from '../components/info/info';
import Featured from '../components/featured/featured';
import BestSeller from "../components/bestseller/bestseller";
import Temoignage from '../components/temoignage/temoignage';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sne3ti | maroccaine 100%</title>
      </Head>
      <Layout>
        <Main></Main>
        <Info></Info>
        <Featured></Featured>
        <BestSeller></BestSeller>
        <Temoignage></Temoignage>
      </Layout>
    </div>
  
  )
}
