import dynamic from "next/dynamic";
let baseURL = "https://www.alphavantage.co";
const ChartComponentAm = dynamic(
  () => import("../../components/ChartComponentAm"),
  {
    ssr: false,
  }
);
// import ChartComponentAm from "../../components/ChartComponentAm";
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
      value: item[1]["4. close"],
    }))
    .slice(0, 22);
  //   console.log("price", price);
  return (
    <>
      <h2>Hello</h2>
      <ChartComponentAm StockDetail={StockDetail} />
      {/* <ChartComponent stockData={StockDetail} /> */}
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
