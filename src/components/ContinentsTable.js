import React from "react";

export default function ContinentsTable({ information, id }) {
  return (
    <section>
      <table className="table table-bordered">
        <thead className="table-bar">
          <tr>
            <th scope="col-sm">Country</th>
            <th scope="col-sm">Total Cases</th>
            <th scope="col-sm">New Cases</th>
            <th scope="col-sm">Total Deaths</th>
            <th scope="col-sm">New Deaths</th>
            <th scope="col-sm">Total Recovered</th>
            <th scope="col-sm">Active Cases</th>
            <th scope="col-sm">Critical cases</th>
            <th scope="col-sm">Total Tests</th>
            <th scope="col-sm">Population</th>
          </tr>
        </thead>

        {information.map((info, index) => {
          if (info.continent !== id) {
            return false; // skip all elements differents to this one
          }

          return (
            <tbody key={index}>
              <tr>
                <td
                  className={
                    info.country === id ? "bg-success text-white" : null
                  }
                >
                  {info.country}
                </td>
                <td>{info.cases.total}</td>
                <td className={info.cases.new ? "bg-warning text-white" : null}>
                  {info.cases.new}
                </td>
                <td>{info.deaths.total}</td>
                <td className={info.deaths.new ? "bg-danger text-white" : null}>
                  {info.deaths.new}
                </td>
                <td>{info.cases.recovered}</td>
                <td>{info.cases.active}</td>
                <td
                  className={
                    info.cases.critical ? "bg-primary text-white" : null
                  }
                >
                  {info.cases.critical}
                </td>
                <td>{info.tests.total}</td>
                <td className="text-info">{info.population}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </section>
  );
}
