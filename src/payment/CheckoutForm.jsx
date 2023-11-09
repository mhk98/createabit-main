import { useCreateCheckoutMutation } from "@/features/order/order";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ checkoutInfo }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [cardError, setCardError] = useState("");
  const [createCheckout] = useCreateCheckoutMutation();

  console.log("checkoutdetails", checkoutInfo);
  const stripe = useStripe();
  const elements = useElements();
  const { FirstName, Email, Total: Price } = checkoutInfo;
  useEffect(() => {
    if (Price > 0) {
      axios
        .post(
          "https://createabit-backend.onrender.com/api/v1/payment/create-payment-intent",

          // "http://localhost:5000/api/v1/payment/create-payment-intent",
          { Price }
        )
        .then((res) => {
          console.log("res.data.clientSecret", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [Price, axios]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("PaymentMethod", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: Email,
            name: FirstName,
          },
        },
      });

    if (confirmError) {
      console.log("confirmError", confirmError);
    }

    console.log("paymentIntent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // const transactionId = paymentIntent.id;
      toast.success("Transaction complete with transactionId", transactionId);
      //save payment information to the server
      createCheckout(checkoutInfo);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "white",
                "::placeholder": {
                  color: "white",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          style={{
            padding: "12px 20px",
            marginTop: "15px",
            fontSize: "16px",
            border: "2px solid #430571",
            color: "#430571",
            fontWeight: "800",
            borderRadius: "50px",
            width: "100%",
          }}
        >
          Place Order
        </button>
      </form>

      {cardError && <p className="ml-8 text-red-500">{cardError}</p>}
      {/* {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )} */}
    </>
  );
};

export default CheckoutForm;
