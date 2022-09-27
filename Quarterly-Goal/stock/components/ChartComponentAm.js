import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import styles from "../styles/Home.module.css";

const ChartComponentAm = ({ StockDetail }) => {
  useLayoutEffect(() => {
    var chart = am4core.create("chartdiv", am4charts.XYChart);

    // Add data
    chart.data = StockDetail;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.renderer.marginLeft = 0;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.tooltipText = "{value}";
    series.strokeWidth = 3;
    series.fillOpacity = 0.5;
    series.tooltip.background.cornerRadius = 10;

    series.tooltip.background.strokeOpacity = 0;
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.label.minWidth = 40;
    series.tooltip.label.minHeight = 40;
    series.tooltip.label.textAlign = "middle";
    series.tooltip.label.textValign = "middle";

    // Add vertical scrollbar
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.marginLeft = 0;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.behavior = "zoomY";
    chart.cursor.lineX.disabled = false;
  }, [StockDetail]);
  return (
    <div>
      <div id="chartdiv" style={{ height: "500px", width: "100%" }}></div>
    </div>
  );
};

export default ChartComponentAm;

// Create chart instance
