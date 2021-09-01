import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 1000,
          type: "deposit",
          category: "Sale",
          date: new Date(),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: -500,
          type: "withdrawal",
          category: "Home",
          date: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
