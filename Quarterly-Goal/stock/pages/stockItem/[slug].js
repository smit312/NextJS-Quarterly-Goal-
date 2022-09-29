import dynamic from "next/dynamic";
import { useState } from "react";
import { FcComboChart } from "react-icons/fc";
import { TbChartCandle } from "react-icons/tb";
import apihandler from "../../components/apihandler";
// let baseURL = "https://www.alphavantage.co";
import styles from "../../styles/Home.module.css";
const CandleChart = dynamic(() => import("../../components/CandleChart"), {
  ssr: false,
});
const ChartComponentAm = dynamic(
  () => import("../../components/ChartComponentAm"),
  {
    ssr: false,
  }
);
var numeral = require("numeral");
export default function StockItem({ StockItem, StockOverview }) {
  const [duration, setDuration] = useState(22);
  const [isLineChart, setIsLineChart] = useState(true);
  console.log("stockitem", StockItem);
  const StockSymbol = StockItem["Meta Data"]["2. Symbol"];
  const LastUpdated = StockItem["Meta Data"]["3. Last Refreshed"];
  function DurationHandler(num) {
    setDuration(num || 0);
  }
  const stockPrices = StockItem["Time Series (Daily)"];
  let stockDates = Object.entries(stockPrices)
    .map((entry) => entry[0])
    .slice(0, duration)
    .reverse();
  let StockDetail = Object.entries(stockPrices)
    .map((item) => ({
      date: item[0],
      value: item[1]["4. close"],
    }))
    .slice(0, duration);
  let RecentStockinfo = Object.entries(stockPrices)
    .map((item) => ({ value: item[1] }))
    .slice(0, 1);
  var myNumeral = numeral(StockOverview["MarketCapitalization"]);
  var MarketCap = myNumeral.format("$ 0.00 a");

  function ChartHandler() {
    setIsLineChart(!isLineChart);
  }
  //time period
  let TimePeriod =
    StockDetail[0].value - StockDetail[StockDetail.length - 1].value;
  let TimePeriodStyle = TimePeriod > 0 ? styles.geenGain : styles.redGain;
  let percentageCount =
    (Number(StockDetail[0].value) /
      Number(StockDetail[StockDetail.length - 1].value)) *
      100 -
    100;
  console.log("percentageCount", percentageCount);
  return (
    <div className={styles.container}>
      <div className={styles.stocksymbl}>{StockSymbol}</div>
      <p style={{ textAlign: "center" }}>
        {RecentStockinfo[0]["value"]["4. close"]}
      </p>
      <div className={styles.timeperiod}> Last {duration} days</div>
      <div className={styles.percentageCount}>
        <span className={TimePeriodStyle}>
          {percentageCount.toFixed(3)}%
          {TimePeriod > 0 ? (
            <>(+{TimePeriod.toFixed(3)})</>
          ) : (
            <>({TimePeriod.toFixed(3)})</>
          )}
        </span>
      </div>

      {isLineChart ? (
        <ChartComponentAm StockDetail={StockDetail} />
      ) : (
        <CandleChart StockItem={StockItem} duration={duration} />
      )}
      {/* <ChartComponentAm StockDetail={StockDetail} />

      <CandleChart StockItem={StockItem} duration={duration} /> */}
      <div className={styles.buttons_div}>
        <button
          className={
            duration == "7" ? styles.time_active_button : styles.time_button
          }
          onClick={() => DurationHandler(7)}
        >
          1 week
        </button>
        <button
          className={
            duration == "22" ? styles.time_active_button : styles.time_button
          }
          onClick={() => DurationHandler(22)}
        >
          1 month
        </button>
        <button
          className={
            duration == "132" ? styles.time_active_button : styles.time_button
          }
          onClick={() => DurationHandler(132)}
        >
          6 month
        </button>
        <button
          className={
            duration == "264" ? styles.time_active_button : styles.time_button
          }
          onClick={() => DurationHandler(264)}
        >
          12 months
        </button>
        <button onClick={ChartHandler} className={styles.Chartbtn}>
          {/* {isLineChart ? "switch to candle chart" : "switch to line chart"} */}
          {isLineChart ? (
            <TbChartCandle title="switch to linechart" />
          ) : (
            <FcComboChart title="switch to candlechart" />
          )}
        </button>
      </div>
      <div className={styles.stockinfocards}>
        <div className={styles.stockinfocard}>
          <p> open Price : {RecentStockinfo[0]["value"]["1. open"]}</p>
          <p> Day High : {RecentStockinfo[0]["value"]["2. high"]}</p>
          <p> Day Low : {RecentStockinfo[0]["value"]["3. low"]}</p>
          <p> Close price : {RecentStockinfo[0]["value"]["4. close"]}</p>
          <p>52WeekHigh : {StockOverview["52WeekHigh"] || "Not Found"}</p>
          <p>52WeekLow : {StockOverview["52WeekLow"] || "Not Found"}</p>
        </div>
        <div className={styles.stockinfocard}>
          <p>DividendDate : {StockOverview["DividendDate"] || "Not Found"}</p>
          <p>
            DividendPerShare :{" "}
            {StockOverview["DividendPerShare"] || "Not Found"}
          </p>
          <p>MarketCapitalization : {MarketCap || "Not Found"}</p>
          <p></p>

          <p>Sector : {StockOverview["Sector"] || "Not Found"}</p>
          <p>Industry: {StockOverview["Industry"] || "Not Found"}</p>
          <p className={styles.LastUpdated}>LastUpdatedDate : {LastUpdated}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const StockSymbol = params.slug;
  // const res = await fetch(
  //   `${baseURL}/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=full&&limit=1000&apikey=HTKVDQLH7OJN894F`
  // );
  // const StockItem = await res.json();
  const StockItem = await apihandler(
    "TIME_SERIES_DAILY",
    "symbol=" + StockSymbol
  );
  // const CompanyOverview = await fetch(
  //   `${baseURL}/query?function=OVERVIEW&symbol=${StockSymbol}&apikey==HTKVDQLH7OJN894F`
  // );
  // const StockOverview = await CompanyOverview.json();
  const StockOverview = await apihandler("OVERVIEW", "symbol=" + StockSymbol);

  return {
    props: {
      StockItem,
      StockOverview,
    },
  };
}
