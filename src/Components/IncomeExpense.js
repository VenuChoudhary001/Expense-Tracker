import React, { useContext } from "react";
import { Data } from "./Context";
function IncomeExpense() {
  const { data } = useContext(Data);
  console.log(data);
  const incomeArray = data.filter((item) => {
    if (item.amount > 0) return item;
  });
  const expenseArray = data.filter((item) => {
    if (item.amount < 0) return item;
  });
  console.log(incomeArray);

  const calculateIncome = (arr) => {
    return arr
      .reduce((sum, item) => {
        return sum + item.amount;
      }, 0)
      .toFixed(2);
  };
  return (
    <div>
      <div className="contianer">
        <div className="row">
          <div className="col offset-sm-3 d-flex ">
            <div
              className="card-column "
              style={{
                width: "18rem",
              }}
            >
              <div className="card-title">
                <h4> INCOME</h4>
              </div>
              <div className="card-subtitle text-primary">
                <h3> {calculateIncome(incomeArray)}</h3>
              </div>
            </div>
            <div className="card-column " style={{ width: "18rem" }}>
              <div className="card-title">
                <h4> EXPENSE</h4>
              </div>
              <div className="card-subtitle text-danger">
                <h3> {calculateIncome(expenseArray)}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpense;
