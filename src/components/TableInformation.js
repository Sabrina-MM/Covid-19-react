import React, { useState } from "react";
import FullTable from "../components/FullTable";
import SimpleCountryTable from "./SimpleCountryTable";
import { continents, columnsInformation } from "../constants";

export default function TableInformation({ information }) {
  const [countries, setCountries] = useState();
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [tables, setTables] = useState(
    <FullTable information={information} continent={selectedContinent} />
  );

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset(); //to clean input fields
    information.map((info, i) => {
      if (info.country.length > 0) {
        if (info.country.toUpperCase() === countries.toUpperCase()) {
          return setTables(<SimpleCountryTable information={information[i]} />);
        }
      }
      return null;
    });
  }

  function buttonsHandle(continent) {
    setSelectedContinent(continent);
    setTables(<FullTable information={information} continent={continent} />);
  }

  function handleCheckboxes(e) {
    let checkbox = e.target.checked;
    let targetColumn = e.target.name;

    if (checkbox === true) {
      updatingColumnValue(targetColumn, true);
      setTables(
        <FullTable information={information} continent={selectedContinent} />
      );
    } else {
      updatingColumnValue(targetColumn, false);
      setTables(
        <FullTable information={information} continent={selectedContinent} />
      );
    }
  }

  function updatingColumnValue(name, checkbox) {
    columnsInformation.map((column, i) => {
      let columnName = column.column;
      if (columnName === name) {
        column.value = checkbox;
        return column.value;
      }
      return null;
    });
  }

  return (
    <section>
      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle float-start me-2"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded={false}
        >
          Columns
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {columnsInformation.map((name, index) => {
            return (
              <li key={index} className="p-2">
                <input
                  type="checkbox"
                  name={name.column}
                  onClick={handleCheckboxes}
                  defaultChecked={true}
                  className="me-1"
                />
                <label htmlFor={name.column}>{name.column}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={handleSubmit} className="d-flex float-end col-sm-5 mb-4">
        <input
          type="search"
          placeholder="Type to search..."
          onChange={(e) => setCountries(e.target.value)}
          className="form-control"
        />
        <input type="submit" className="btn btn-primary ms-2" />
      </form>
      {continents.map((continent, index) => {
        return (
          <button
            key={index}
            onClick={(e) => buttonsHandle(e.target.id)}
            className="btn btn-secondary float-start  me-2"
            id={continent}
          >
            {continent}
          </button>
        );
      })}

      {tables}
    </section>
  );
}
