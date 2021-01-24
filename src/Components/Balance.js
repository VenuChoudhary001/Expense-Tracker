import React, { useContext } from "react";
import { Data } from "./Context";

function Balance() {
  const { data } = useContext(Data);

  const amount = data.map((item) => item.amount);
  const total = amount
    .reduce((sum, item) => {
      return item + sum;
    }, 0)
    .toFixed(2);
  return (
    <div className="contianer">
      <div className="row">
        <div className="col offset-sm-3">
          <div className="card-column my-3">
            <div className="card-title">
              <h4 className="h3">YOUR BALANCE</h4>
            </div>
            <div className="card-subtitle">
              <span
                className={
                  total > 0
                    ? "text-success  display-4"
                    : "text-danger  display-4"
                }
              >
                {total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;
