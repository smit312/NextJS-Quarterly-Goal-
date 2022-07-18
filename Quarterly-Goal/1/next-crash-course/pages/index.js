import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Next App</title>
        <meta name="keywords" content="web development, programming" />
      </Head>
      <h1>Home Page</h1>
    </div>
  );
}
