import React from "react";

import { createServer, Model } from "miragejs";
import ReactDOM from "react-dom";

import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Desenvolvimento de site",
          amount: 2000,
          type: "deposit",
          category: "Venda",
          createdAt: new Date("2020-01-01 00:00:00"),
        },
        {
          id: 2,
          title: "Aluguel apartamento",
          amount: 500,
          type: "withdrawal",
          category: "Casa",
          createdAt: new Date("2021-02-01 00:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
