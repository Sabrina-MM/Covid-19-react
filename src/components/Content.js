import React, { useState, useEffect } from "react";
import Charts from "../components/Charts";
import TableInformation from "../components/TableInformation";
import { targetContinentInformation, targetContinents } from "../constants";
import "../css/Content.css";

export default function Content() {
  const [information, setInformation] = useState();
  const [newDataPerContinent, setnewDataPerContinent] = useState();
  const [secondChartWithCovidInformation, setSecondChartWithCovidInformation] =
    useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  function fetchingData() {
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6315ea9d47msh277bec8a0edf6fcp1072a3jsn9e763a4b1597",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //sorting countries
        setInformation(
          data.response.sort((a, b) =>
            a.country > b.country ? 1 : b.country > a.country ? -1 : 0
          )
        );

        data.response.map((covidInformation, index) => {
          const { country } = covidInformation;

          targetContinentInformation.map((key, i) => {
            if (targetContinentInformation[i][0] === country) {
              //update active cases
              targetContinentInformation[i][1] = covidInformation.cases.active;

              //update total critical
              targetContinentInformation[i][2] =
                covidInformation.cases.critical;

              //update total recovered
              targetContinentInformation[i][3] =
                covidInformation.cases.recovered;
            }
            return null;
          });

          targetContinents.map((key, i) => {
            if (targetContinents[i][0] === country) {
              // update total cases
              targetContinents[i][1] = covidInformation.cases.total;
              // update total deaths
              targetContinents[i][2] = covidInformation.deaths.total;
            }
            return null;
          });

          return null;
        });

        targetContinents.unshift(["Population", "Total cases", "Total Deaths"]);
        targetContinentInformation.unshift([
          "Total tests",
          "Active",
          "Critical",
          "Recovered",
        ]);
        setnewDataPerContinent(targetContinents);
        setSecondChartWithCovidInformation(targetContinentInformation);
      });
  }

  return (
    <div className="Content">
      <Charts
        newDataPerContinent={newDataPerContinent}
        secondChartWithCovidInformation={secondChartWithCovidInformation}
      />
      <div className="main-content">
        <h2>Covid-19 Information by Country</h2>
        <h4>
          <i>Latest Update: {information ? information[0].day : null}</i>
        </h4>
      </div>
      {information ? <TableInformation information={information} /> : null}
    </div>
  );
}
