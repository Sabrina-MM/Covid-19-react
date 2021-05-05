import React, { useState, useEffect } from "react";
import Charts from "../components/Charts";
import TableInformation from "../components/TableInformation";

import "../css/Content.css";

export default function Content() {
  const [information, setInformation] = useState();
  const [newDataPerContinent, setnewDataPerContinent] = useState();
  const [
    secondChartWithCovidInformation,
    setSecondChartWithCovidInformation,
  ] = useState([]);

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

        let targetContinentInformation = [
          ["North-America", 0, 0, 0],
          ["Europe", 0, 0, 0],
          ["Asia", 0, 0, 0],
          ["South-America", 0, 0, 0],
          ["Oceania", 0, 0, 0],
          ["Africa", 0, 0, 0],
        ];
        let targetContinents = [
          ["North-America", 0, 0],
          ["Europe", 0, 0],
          ["Asia", 0, 0],
          ["South-America", 0, 0],
          ["Oceania", 0, 0],
          ["Africa", 0, 0],
        ];

        data.response.map((covidInformation, index) => {
          const { continent, deaths, cases } = covidInformation;

          targetContinentInformation.map((key, i) => {
            if (targetContinentInformation[i][0] === continent) {
              //updating active cases
              targetContinentInformation[i][1] =
                targetContinentInformation[i][1] +
                (cases.active ? parseInt(cases.active) : 0);
              //updating total critical
              targetContinentInformation[i][2] =
                targetContinentInformation[i][2] +
                (cases.critical ? parseInt(cases.critical) : 0);
              //updating total recovered
              targetContinentInformation[i][3] =
                targetContinentInformation[i][3] +
                (cases.recovered ? parseInt(cases.recovered) : 0);
            }
            return null;
          });

          targetContinents.map((key, i) => {
            if (targetContinents[i][0] === continent) {
              // actualiza total cases
              targetContinents[i][1] =
                targetContinents[i][1] +
                (cases.total ? parseInt(cases.total) : 0);
              // actualiza total deaths
              targetContinents[i][2] =
                targetContinents[i][2] +
                (deaths.total ? parseInt(deaths.total) : 0);
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
      <h2>Covid-19 Information by Country</h2>

      {information ? <TableInformation information={information} /> : null}
    </div>
  );
}
