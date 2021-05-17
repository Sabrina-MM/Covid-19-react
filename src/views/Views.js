import React from "react";
import Content from "../components/Content";
import cov from "../img/cov.jpg";

import "../css/Views.css";

function Views() {
  return (
    <div className="App">
      <header>
        <p className="m-2">
          Keep you updated here:{" "}
          <a
            href="https://www.gov.uk/coronavirus"
            alt="Coronavirus news"
            target="blank"
          >
            Coronavirus updates and guidance
          </a>
          <a
            href="https://github.com/Sabrina-MM"
            alt="Github animation"
            target="blank"
            className="float-end"
          >
            <i className="fab fa-github ms-2"></i>
          </a>
          <a
            href="https://www.nhs.uk/conditions/coronavirus-covid-19/coronavirus-vaccination/book-coronavirus-vaccination/"
            alt="Vaccination"
            target="blank"
            className="float-end"
          >
            <i className="fas fa-syringe"></i>
          </a>
        </p>
        <h1 className="App-main-title bg-light">
          Covid-19 Coronavirus Pandemic{" "}
          <img src={cov} alt="covid" className="img-fluid mb-5" />
        </h1>
      </header>
      <main className="container">
        <Content />
      </main>
      <footer>
        <small>
          @2021 This project was coded by Sabrina Martinez and is open-sourced
          on
          <a
            href="https://github.com/Sabrina-MM"
            alt="Github animation"
            target="blank"
          >
            <i className="fab fa-github ms-2"></i>
          </a>
        </small>
      </footer>
    </div>
  );
}

export default Views;
