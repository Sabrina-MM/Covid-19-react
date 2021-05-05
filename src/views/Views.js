import React from "react";
import Content from "../components/Content";
import cov from "../img/cov.jpg";

import "../css/Views.css";

function Views() {
  return (
    <div className="App">
      <header className="App-header bg-light">
        <h1>
          Covid-19 Information{" "}
          <img src={cov} alt="covid" className="img-fluid mb-5 w-25" />
        </h1>
      </header>
      <main className="container">
        <Content />
      </main>
      <footer></footer>
    </div>
  );
}

export default Views;
