import React from "react";

function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col  ">
          <h1 className="display-4 text-center my-4">
            Expense
            <span className="text-success">
              <i className="fas fa-dollar-sign"></i>
            </span>
            <span className="text-info">Tracker</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
