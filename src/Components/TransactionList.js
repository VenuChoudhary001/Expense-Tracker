import React, { useContext } from "react";
import { Data } from "./Context";
function TransactionList() {
  const { data, Delete } = useContext(Data);
  console.log("this is data :", data);
  console.log({ data });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col  mt-4">
            <span className="h4">History</span>
            <ul className="list-group">
              {data.map((item) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={item.id}
                  >
                    <span>{item.data}</span>
                    <span
                      className={
                        item.amount > 0 ? "text-success" : "text-danger"
                      }
                    >
                      {item.amount}
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => Delete(item.id)}
                      >
                        X
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionList;
