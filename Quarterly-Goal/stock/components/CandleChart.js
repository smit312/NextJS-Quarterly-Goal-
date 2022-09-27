import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const CandleChart = ({ StockItem, duration }) => {
  console.log("from candlechart", StockItem);
  const data = Object.entries(StockItem["Time Series (Daily)"])
    .map((entry) => ({
      date: entry[0],
      open: entry[1]["1. open"],
      high: entry[1]["2. high"],
      low: entry[1]["3. low"],
      close: entry[1]["4. close"],
      volume: entry[1]["5. volume"],
    }))
    .slice(0, duration)
    .reverse();
  useLayoutEffect(() => {
    var chart = am4core.create("candlechart", am4charts.XYChart);

    chart.padding(0, 15, 0, 15);

    // Load data
    console.log("hi", data);
    // chart.dataSource.url =
    //   "https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv";
    chart.data = data;
    chart.dataSource.parser = new am4core.CSVParser();
    chart.dataSource.parser.options.useColumnNames = true;
    chart.dataSource.parser.options.reverse = true;

    // the following line makes value axes to be arranged vertically.
    chart.leftAxesContainer.layout = "vertical";

    // uncomment this line if you want to change order of axes
    //chart.bottomAxesContainer.reverseOrder = true;

    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    //dateAxis.renderer.ticks.template.length = 8;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
    dateAxis.renderer.grid.template.disabled = true;
    dateAxis.renderer.ticks.template.disabled = false;
    dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
    dateAxis.renderer.minLabelPosition = 0.01;
    dateAxis.renderer.maxLabelPosition = 0.99;
    dateAxis.keepSelection = true;
    dateAxis.minHeight = 30;

    dateAxis.groupData = true;

    // these two lines makes the axis to be initially zoomed-in
    // dateAxis.start = 0.7;
    // dateAxis.keepSelection = true;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.zIndex = 1;
    valueAxis.renderer.baseGrid.disabled = true;
    // height of axis
    valueAxis.height = am4core.percent(65);

    valueAxis.renderer.gridContainer.background.fill = am4core.color("#000000");
    valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
    valueAxis.renderer.inside = true;
    valueAxis.renderer.labels.template.verticalCenter = "bottom";
    valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

    //valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis.renderer.fontSize = "0.8em";

    var series = chart.series.push(new am4charts.CandlestickSeries());
    series.dataFields.dateX = "date";
    series.dataFields.openValueY = "open";
    series.dataFields.valueY = "close";
    series.dataFields.lowValueY = "low";
    series.dataFields.highValueY = "high";
    //series.clustered = false;
    series.tooltipText =
      "open: {openValueY.value}\nlow: {lowValueY.value}\nhigh: {highValueY.value}\nclose: {valueY.value}";
    series.name = "MSFT";
    series.defaultState.transitionDuration = 0;

    var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.tooltip.disabled = true;
    // height of axis
    valueAxis2.height = am4core.percent(35);
    valueAxis2.zIndex = 3;
    // this makes gap between panels
    valueAxis2.marginTop = 30;
    valueAxis2.renderer.baseGrid.disabled = true;
    valueAxis2.renderer.inside = true;
    valueAxis2.renderer.labels.template.verticalCenter = "bottom";
    valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
    //valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis2.renderer.fontSize = "0.8em";

    valueAxis2.renderer.gridContainer.background.fill =
      am4core.color("#000000");
    valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

    var series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.dateX = "date";
    //series2.clustered = false;
    series2.dataFields.valueY = "volume";
    series2.yAxis = valueAxis2;
    series2.tooltipText = "{valueY.value}";
    series2.name = "Series 2";
    // volume should be summed
    series2.groupFields.valueY = "sum";
    //series2.defaultState.transitionDuration = 0;

    chart.cursor = new am4charts.XYCursor();

    var scrollbarX = new am4charts.XYChartScrollbar();

    var sbSeries = chart.series.push(new am4charts.LineSeries());
    sbSeries.dataFields.valueY = "close";
    sbSeries.dataFields.dateX = "date";
    scrollbarX.series.push(sbSeries);
    sbSeries.disabled = true;
    scrollbarX.marginBottom = 20;
    chart.scrollbarX = scrollbarX;
  }, [StockItem, duration]);
  return (
    <div>
      <div id="candlechart" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};
export default CandleChart;
