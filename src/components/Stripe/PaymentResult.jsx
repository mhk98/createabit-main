const PaymentResult = () => {
  const status = localStorage.getItem("payment-status");
  return (
    <div>
      <h2>Payment Status</h2>
      {status === "Success" ? <h3>Success</h3> : <h3>Failed</h3>}
    </div>
  );
};

export default PaymentResult;
