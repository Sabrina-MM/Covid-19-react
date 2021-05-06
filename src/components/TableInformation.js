import React, { useState } from "react";
import FullTable from "../components/FullTable";
import SimpleCountryTable from "./SimpleCountryTable";
import ContinentsTable from "../components/ContinentsTable";

export default function TableInformation({ information }) {
  const [countries, setCountries] = useState();
  const [tables, setTables] = useState(<FullTable information={information} />);

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset(); //to clean input fields
    information.map((info, i) => {
      if (info.country.length > 0) {
        if (info.country.toUpperCase() === countries.toUpperCase()) {
          return setTables(<SimpleCountryTable information={information[i]} />);
        } else {
          return null;
        }
      }
      return null;
    });
  }

  function buttonsHandle(id) {
    let position = information.findIndex((a) => a.country === id);
    let object = information[position];
    information.splice(position, 1); //deleting object
    information.unshift(object); //adding the object at the begining of array

    setTables(
      id === "All" ? (
        <FullTable information={information} />
      ) : (
        <ContinentsTable information={information} id={id} />
      )
    );
  }
  let continents = [
    "All",
    "Africa",
    "Europe",
    "Oceania",
    "Asia",
    "South-America",
    "North-America",
  ];

  return (
    <section>
      <form onSubmit={handleSubmit} className="d-flex float-end col-6 mb-4">
        <input
          type="search"
          placeholder="Type to search..."
          onChange={(e) => setCountries(e.target.value)}
          className="form-control"
        />
        <input type="submit" className="btn btn-primary ms-2" />
      </form>

      {continents.map((info, index) => {
        return (
          <button
            key={index}
            onClick={(e) => buttonsHandle(e.target.id)}
            className="btn btn-secondary float-start  me-2"
            id={continents[index]}
          >
            {continents[index]}
          </button>
        );
      })}
      {tables}
    </section>
  );
}
