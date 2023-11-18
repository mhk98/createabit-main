import React from "react";

const PaymentResult = () => {
  const Result = localStorage.getItem("payment-status");
  return (
    <div
      style={{
        margin: "200px 0px",
      }}
    >
      <h3 className="text-center">Payment Status</h3>
      {Result === "Success" ? (
        <div>
          <h1>Success</h1>
        </div>
      ) : (
        <div>
          <h1>Failed</h1>
        </div>
      )}
    </div>
  );
};

export default PaymentResult;
