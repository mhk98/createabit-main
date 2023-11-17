import React from "react";

const PaymentStatus = () => {
  const PaymentStatus = localStorage.getItem("payment-status");
  return (
    <div style={{ marginTop: "200px", marginBottom:"200px", width: "400px", margin:"auto"}}>
      <h3>Payment Status</h3>
      {PaymentStatus === "Success" ? (
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

export default PaymentStatus;
