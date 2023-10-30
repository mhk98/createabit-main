import { useCreateCheckoutMutation } from "@/features/order/order";
import CheckoutForm from "@/payment/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const stripePromise = loadStripe(
  "pk_test_51L1rVDH0VF27tpW3LEs6Z66fVvzRIoh08xSbY4zSyiG03Q2pwNVzhq8JoYv4s4xF4zwObI3gLNUjus6dFj0ltrvr00m17agrob"
);

function Checkout({ lightMode }) {
  const [products, setProducts] = useState([]);
  const [subTotal, setSubTotal] = useState([]);
  const [total, setTotal] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(savedCart);

    const subtotal = localStorage.getItem("subtotal");
    setSubTotal(subtotal);
    const total = localStorage.getItem("total");
    setTotal(total);
  }, []);

  const [createCheckout] = useCreateCheckoutMutation();

  const handleCheckout = () => {
    let data = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Country: country,
      City: city,
      Area: area,
      PostCode: postalCode,
      Address: address,
      Phone: phone,
      orderDetails: products,
      SubTotal: subTotal,
      Total: total,
    };

    toast.success("Successfully create order");
    createCheckout(data);
  };
  return (
    <section
      className={`shop-checkout ${lightMode ? "light" : ""} section-padding`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="order-form md-mb50">
              <h4 className="mb-40">Billing Details</h4>
              <form action="contact.php">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">First Name *</label>
                      <input
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="first_name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">last Name *</label>
                      <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="last_name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Your Email *</label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Country *</label>
                      <input
                        onChange={(e) => setCountry(e.target.value)}
                        type="text"
                        name="country"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">City / Town *</label>
                      <input
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        name="city"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">Area *</label>
                      <input
                        onChange={(e) => setArea(e.target.value)}
                        type="text"
                        name="area"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="">Postal Code *</label>
                      <input
                        onChange={(e) => setPostalCode(e.target.value)}
                        type="text"
                        name="postal_code"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="">Address *</label>
                      <input
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        name="address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">Phone *</label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="checkout-order-info">
              <h4 className="mb-40">Your Order</h4>
              <div>
                <ul className="rest">
                  {products.map((product) => (
                    <li className="mb-5" key={product.id}>
                      <div className="d-flex align-items-center">
                        <div>
                          <p>{product.title}</p>
                        </div>
                        <div className="ml-auto">
                          <h5 className="fz-18">${product.price}</h5>
                        </div>
                      </div>
                    </li>
                  ))}

                  <li className="pt-10 bord-thin-top">
                    <div className="d-flex align-items-center">
                      <div>
                        <h6>Subtotal</h6>
                      </div>
                      <div className="ml-auto">
                        <h5 className="main-color4 fz-20">${subTotal}</h5>
                      </div>
                    </div>
                  </li>
                  <li className="pt-10 bord-thin-top bord-thin-bottom">
                    <div className="d-flex align-items-center">
                      <div>
                        <h6>Total</h6>
                      </div>
                      <div className="ml-auto">
                        <h5 className="main-color4 fz-20">${total}</h5>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="text mt-40">
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our{" "}
                    <a href="#0">privacy policy</a>.
                  </p>
                </div>
                <div className="mt-30">
                  <Elements stripe={stripePromise}>
                    <CheckoutForm />
                  </Elements>
                </div>
                <div className="mt-30">
                  <button
                    type="submit"
                    className="main-colorbg4 butn butn-md butn-bg text-dark"
                  >
                    <span onClick={handleCheckout} className="text-u fw-600">
                      Place Order
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
