import { createContext, useEffect, useState } from "react";
import { Transaction, TransactionInput } from "../models";
import { api } from "../services/api";

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get<{ transactions: Transaction[] }>("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transaction,
      createdAt: new Date(),
    });
    setTransactions([...transactions, response.data.transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
