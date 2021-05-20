import React, { useState, useEffect } from "react";
import { columnsInformation } from "../constants";

import "../css/FullTable.css";

export default function FullTable({ information, continent }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  let position = information.findIndex((a) => a.country === continent);
  let object = information[position];
  information.splice(position, 1); //deleting object
  information.unshift(object); //adding the object at the begining of array */

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 600) ||
        currentScrollPos < 1470
    );
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const stickyMenu = {
    position: "sticky",
    top: "0",

    background: "aliceblue",
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <section>
      <button
        className="back-to-top show"
        onClick={goToTop}
        style={visible === false ? null : { display: "none" }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      <table className="table table-bordered">
        <thead>
          <tr>
            {columnsInformation.map((column, i) => {
              if (column.value === false) {
                return false;
              } else
                return (
                  <th
                    scope="col-sm"
                    key={i}
                    style={visible === false ? { ...stickyMenu } : null}
                  >
                    {column.column}
                  </th>
                );
            })}
          </tr>
        </thead>

        <tbody>
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
              <tr key={index}>
                {columnsInformation[0].value === false ? (
                  false
                ) : (
                  <td
                    className={
                      info.country === continent
                        ? "bg-success text-white"
                        : null
                    }
                  >
                    {info.country}
                  </td>
                )}
                {columnsInformation[1].value === false ? (
                  false
                ) : (
                  <td>{info.cases.total}</td>
                )}

                {columnsInformation[2].value === false ? null : (
                  <td
                    className={info.cases.new ? "bg-warning text-white" : null}
                  >
                    {info.cases.new}
                  </td>
                )}

                {columnsInformation[3].value === false ? (
                  false
                ) : (
                  <td>{info.deaths.total} </td>
                )}

                {columnsInformation[4].value === false ? (
                  false
                ) : (
                  <td
                    className={info.deaths.new ? "bg-danger text-white" : null}
                  >
                    {info.deaths.new}
                  </td>
                )}

                {columnsInformation[5].value === false ? (
                  false
                ) : (
                  <td>{info.cases.recovered}</td>
                )}

                {columnsInformation[6].value === false ? (
                  false
                ) : (
                  <td>{info.cases.active} </td>
                )}

                {columnsInformation[7].value === false ? (
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
                {columnsInformation[8].value === false ? (
                  false
                ) : (
                  <td>{info.tests.total} </td>
                )}
                {columnsInformation[9].value === false ? (
                  false
                ) : (
                  <td className="text-info">{info.population} </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
