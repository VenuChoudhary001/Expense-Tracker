import React from "react";

import Balance from "./Components/Balance";
import Header from "./Components/Header";

import IncomeExpense from "./Components/IncomeExpense";

import NewTranscation from "./Components/NewTranscation";
import TransactionList from "./Components/TransactionList";
import { Provider } from "./Components/Context";
function App() {
  return (
    <Provider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <NewTranscation />
      </div>
    </Provider>
  );
}

export default App;
