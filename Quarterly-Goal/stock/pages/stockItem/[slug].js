import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
let baseURL = "https://www.alphavantage.co";
import ChartComponent from "../../components/ChartComponent";
export default function StockItem({ StockItem }) {
  console.log("hellooooooo", StockItem);
  const stockPrices = StockItem["Time Series (Daily)"];
  let stockDates = Object.entries(stockPrices)
    .map((entry) => entry[0])
    .slice(0, 100)
    .reverse();
  console.log("Stock Price", stockPrices);
  console.log("stockDate", stockDates);
  let StockDetail = Object.entries(stockPrices)
    .map((item) => ({
      date: item[0],
      itemPrices: item[1]["4. close"],
    }))
    .slice(0, 100);
  //   console.log("price", price);
  return (
    <>
      <h2>Hello</h2>
      <ChartComponent stockData={StockDetail} />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const StockSymbol = params.slug;
  const res = await fetch(
    `${baseURL}/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=full&&limit=1000&apikey=HTKVDQLH7OJN894F`
  );
  const StockItem = await res.json();

  return {
    props: {
      StockItem,
    },
  };
}
