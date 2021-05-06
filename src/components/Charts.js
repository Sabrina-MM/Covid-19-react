import React from "react";

import { Chart } from "react-google-charts";

import "../css/Content.css";

export default function Content({
  newDataPerContinent,
  secondChartWithCovidInformation,
}) {
  return (
    <div className="row">
      <div className="col">
        <Chart //first chart
          height={400}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={newDataPerContinent}
          options={{
            title: "Total Cases and Deaths by Continent",

            hAxis: {
              title: "Population",
              minValue: 0,
            },
            vAxis: {
              title: "Continents",
            },
          }}
          legendToggle
        />
      </div>

      <div className="col">
        <Chart //second chart
          height={400}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={secondChartWithCovidInformation}
          options={{
            title: "Active, Critical and Recovered by Continent",

            hAxis: {
              title: "Population",
              minValue: 0,
            },
            vAxis: {
              title: "Continents",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </div>
  );
}
