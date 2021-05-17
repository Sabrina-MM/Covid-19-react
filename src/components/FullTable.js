import React from "react";
import { columnsInformation } from "../constants";

import "../css/FullTable.css";

export default function FullTable({ information, continent }) {
  let position = information.findIndex((a) => a.country === continent);
  let object = information[position];
  information.splice(position, 1); //deleting object
  information.unshift(object); //adding the object at the begining of array */

  return (
    <section>
      <table className="table table-bordered">
        <thead className="table-bar">
          <tr>
            <th scope="col-sm">Country</th>
            {columnsInformation.map((column, i) => {
              if (column.value === false) {
                return false;
              } else
                return (
                  <th scope="col-sm" key={i}>
                    {column.column}
                  </th>
                );
            })}
          </tr>
        </thead>

        {information.map((info, index) => {
          if (continent === "All") {
            if (
              info.country === "Africa" ||
              info.country === "Europe" ||
              info.country === "North-America" ||
              info.country === "South-America" ||
              info.country === "Oceania" ||
              info.country === "Asia"
            ) {
              return false; // skip these elements
            }
          } else if (info.continent !== continent) {
            return false; // skip all elements differents to this one
          }

          return (
            <tbody key={index}>
              <tr>
                <td
                  className={
                    info.country === continent ? "bg-success text-white" : null
                  }
                >
                  {info.country}
                </td>
                {columnsInformation[0].value === false ? (
                  false
                ) : (
                  <td>{info.cases.total}</td>
                )}

                {columnsInformation[1].value === false ? null : (
                  <td
                    className={info.cases.new ? "bg-warning text-white" : null}
                  >
                    {info.cases.new}
                  </td>
                )}

                {columnsInformation[2].value === false ? (
                  false
                ) : (
                  <td>{info.deaths.total} </td>
                )}

                {columnsInformation[3].value === false ? (
                  false
                ) : (
                  <td
                    className={info.deaths.new ? "bg-danger text-white" : null}
                  >
                    {info.deaths.new}
                  </td>
                )}

                {columnsInformation[4].value === false ? (
                  false
                ) : (
                  <td>{info.cases.recovered}</td>
                )}

                {columnsInformation[5].value === false ? (
                  false
                ) : (
                  <td>{info.cases.active} </td>
                )}

                {columnsInformation[6].value === false ? (
                  false
                ) : (
                  <td
                    className={
                      info.cases.critical ? "bg-primary text-white" : null
                    }
                  >
                    {info.cases.critical}{" "}
                  </td>
                )}
                {columnsInformation[7].value === false ? (
                  false
                ) : (
                  <td>{info.tests.total} </td>
                )}
                {columnsInformation[8].value === false ? (
                  false
                ) : (
                  <td className="text-info">{info.population} </td>
                )}
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
}
