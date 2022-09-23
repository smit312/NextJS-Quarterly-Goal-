import dynamic from "next/dynamic";
let baseURL = "https://www.alphavantage.co";
import styles from "../../styles/Home.module.css";

const ChartComponentAm = dynamic(
  () => import("../../components/ChartComponentAm"),
  {
    ssr: false,
  }
);
export default function StockItem({ StockItem }) {
  console.log("hellooooooo", StockItem);
  console.log("symobo;", StockItem["Meta Data"]);
  const StockSymbol = StockItem["Meta Data"]["2. Symbol"];
  const LastUpdated = StockItem["Meta Data"]["3. Last Refreshed"];

  const stockPrices = StockItem["Time Series (Daily)"];
  let stockDates = Object.entries(stockPrices)
    .map((entry) => entry[0])
    .slice(0, 10)
    .reverse();
  console.log("Stock Price", stockPrices);
  console.log("stockDate", stockDates);
  let StockDetail = Object.entries(stockPrices)
    .map((item) => ({
      date: item[0],
      value: item[1]["4. close"],
    }))
    .slice(0, 22);
  //   console.log("price", price);
  return (
    <div className={styles.container}>
      <div className={styles.stocksymbl}>{StockSymbol}</div>
      <ChartComponentAm StockDetail={StockDetail} />
      <div className={styles.stockinfocards}>
        <div className={styles.stockinfocard}>
          <p>LastUpdatedDate : {LastUpdated}</p>
          <p>LastUpdatedDate : {LastUpdated}</p>
          <p>LastUpdatedDate : {LastUpdated}</p>
          <p>LastUpdatedDate : {LastUpdated}</p>
        </div>
        <div className={styles.stockinfocard}>
          <p>LastUpdatedDate : {LastUpdated}</p>
          <p>LastUpdatedDate : {LastUpdated}</p>
          <p>LastUpdatedDate : {LastUpdated}</p>
          <p>LastUpdatedDate : {LastUpdated}</p>
          <p className={styles.LastUpdated}>LastUpdatedDate : {LastUpdated}</p>
        </div>
      </div>
    </div>
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
