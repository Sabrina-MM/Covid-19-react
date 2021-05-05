import React, { useState } from "react";
import FullTable from "../components/FullTable";
import SimpleCountryTable from "./SimpleCountryTable";
import ContinentsTable from "../components/ContinentsTable";

export default function TableInformation({ information }) {
  const [countries, setCountries] = useState();
  const [tables, setTables] = useState(<FullTable information={information} />);

  function handleSubmit(e) {
    e.preventDefault();
    information.map((info, i) => {
      if (info.country.length > 0) {
        if (info.country.toUpperCase() === countries.toUpperCase()) {
          return setTables(<SimpleCountryTable information={information[i]} />);
        } else {
          return null;
        }
      } else return null;
    });
  }
  function handleAllCountriesClick(id) {
    let position = information.findIndex((a) => a.country === id);
    let object = information[position];
    information.splice(position, 1); //deleting object
    information.unshift(object); //adding the object at the begining of array
    setTables(<FullTable information={information} />);
  }

  function handleEachContinentClick(id) {
    let position = information.findIndex((a) => a.country === id);
    let object = information[position];
    information.splice(position, 1); //deleting object
    information.unshift(object); //adding the object at the begining of array
    setTables(<ContinentsTable information={information} id={id} />);
  }

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
      <button
        onClick={(e) => handleAllCountriesClick(e.target.id)}
        className="btn btn-secondary float-start  me-2"
        id="All"
      >
        All
      </button>
      <button
        onClick={(e) => handleEachContinentClick(e.target.id)}
        className="btn btn-secondary float-start  me-2"
        id="Africa"
      >
        Africa
      </button>
      <button
        onClick={(e) => handleEachContinentClick(e.target.id)}
        className="btn btn-secondary float-start  me-2"
        id="Europe"
      >
        Europe
      </button>
      <button
        onClick={(e) => handleEachContinentClick(e.target.id)}
        className="btn btn-secondary float-start  me-2"
        id="Oceania"
      >
        Oceania
      </button>
      <button
        onClick={(e) => handleEachContinentClick(e.target.id)}
        className="btn btn-secondary float-start  me-2"
        id="Asia"
      >
        Asia
      </button>
      <button
        onClick={(e) => handleEachContinentClick(e.target.id)}
        className="btn btn-secondary float-start  me-2"
        id="South-America"
      >
        South-America
      </button>
      <button
        onClick={(e) => handleEachContinentClick(e.target.id)}
        className="btn btn-secondary float-start me-2"
        id="North-America"
      >
        North-America
      </button>

      {tables}
    </section>
  );
}
