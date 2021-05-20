import React from "react";
import { columnsInformation } from "../constants";

export default function SimpleCountryTable({ information }) {
  return (
    <section>
      <table className="table table-bordered">
        <thead className="table-bar">
          <tr>
            {columnsInformation.map((column, i) => {
              return (
                <th scope="col-sm" key={i}>
                  {column.column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{information.country}</td>
            <td>{information.cases.total}</td>
            <td
              className={information.cases.new ? "bg-warning text-white" : null}
            >
              {information.cases.new}
            </td>
            <td>{information.deaths.total}</td>
            <td
              className={information.deaths.new ? "bg-danger text-white" : null}
            >
              {information.deaths.new}
            </td>
            <td>{information.cases.recovered}</td>
            <td>{information.cases.active}</td>
            <td
              className={
                information.cases.critical ? "bg-primary text-white" : null
              }
            >
              {information.cases.critical}
            </td>
            <td>{information.tests.total}</td>
            <td className="text-info">{information.population}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
