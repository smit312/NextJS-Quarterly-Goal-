import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
let baseURL = "https://www.alphavantage.co";

export default function SearchStock() {
  const [bestMatches, setBestMatches] = useState([]);

  async function SubmitHandler(e) {
    e.preventDefault();
    var stock_name = e.target.stock_name.value;
    const res = await fetch(
      `${baseURL}/query?function=SYMBOL_SEARCH&keywords=${stock_name}&apikey=HTKVDQLH7OJN894F`
    );
    const StockData = await res.json();
    setBestMatches(StockData["bestMatches"]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Stock Bazzar</title>
        <meta name="description" content="Stock Bazzar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Stock Bazzar!</a>
        </h1>
        <form onSubmit={SubmitHandler}>
          <div>
            <input
              className={styles.input}
              placeholder="Enter stock name"
              name="stock_name"
            />
            <button className={styles.button}>Submit</button>
          </div>
        </form>
        {console.log("best matches", bestMatches)}
        <div className={styles.grid}>
          {bestMatches.map((stock) => (
            <>
              <a
                href={`stockItem/${stock["1. symbol"]}`}
                className={styles.card}
              >
                <h2>{stock["1. symbol"]} &rarr;</h2>
                <p>{stock["2. name"]}</p>
              </a>
            </>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
