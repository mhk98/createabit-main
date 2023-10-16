import {
  useDeleteCartMutation,
  useGetAllCartQuery,
} from "@/features/cart/cart";
import { useState } from "react";
import toast from "react-hot-toast";

function Cart({ lightMode }) {
  const { data, isError, isLoading } = useGetAllCartQuery();
  const products = data?.data;

  const [cart, setCart] = useState(products);

  console.log("cart", cart);
  // Function to update the cart item quantity
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.Cart_Id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Function to calculate the subtotal of an item
  const calculateSubtotal = (price, quantity) => price * quantity;

  // Function to calculate the total cart price
  const calculateTotal = () =>
    cart.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );

  const [deleteCart, { isLoading1, isError1 }] = useDeleteCartMutation();

  const handleDelete = (id) => {
    deleteCart(id);
    toast.success("Successfully delete product from the cart");
    // Update the cart state with the item removed
    setCart((prevCart) => prevCart.filter((item) => item.Cart_Id !== id));
  };

  return (
    <section
      className={`shop-cart ${lightMode ? "light" : ""} section-padding`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cart?.map((item) => (
                    <tr key={item.Cart_Id}>
                      <td data-column="Product">
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img icon-img-80">
                              <img src={item.image} alt={item.title} />
                            </div>
                          </div>
                          <div className="ml-30">
                            <h6>{item.title}</h6>
                          </div>
                        </div>
                      </td>
                      <td data-column="price">
                        <h5 className="main-color4 fz-18">${item.price}</h5>
                      </td>
                      <td data-column="Quantity">
                        <div className="counter">
                          <span
                            className="down"
                            onClick={() =>
                              updateQuantity(item.Cart_Id, item.quantity - 1)
                            }
                          >
                            -
                          </span>
                          <input type="text" value={item.quantity} readOnly />
                          <span
                            className="up"
                            onClick={() =>
                              updateQuantity(item.Cart_Id, item.quantity + 1)
                            }
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td data-column="Subtotal">
                        <h5 className="main-color4 fz-18">
                          $
                          {calculateSubtotal(item.price, item.quantity).toFixed(
                            2
                          )}
                        </h5>
                      </td>
                      <td className="remove">
                        <span onClick={() => handleDelete(item.Cart_Id)}>
                          <span className="pe-7s-close"></span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="row mt-80">
              <div className="col-lg-6">
                <div className="mt-40 coupon">
                  <h4>Discount</h4>
                  <p className="fz-13">
                    Enter your coupon code if you have one.
                  </p>
                  <form action="contact.php">
                    <div className="form-group d-flex mt-30">
                      <input type="text" name="coupon_code" />
                      <span type="submit" className="butn butn-md butn-bord">
                        <span>Apply</span>
                      </span>
                    </div>
                    <span className="mt-10 fz-13 opacity-7">Coupon code</span>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-2">
                {cart && cart.length > 0 && (
                  <div className="mt-40 total">
                    <h4>Cart totals</h4>
                    <ul className="rest mt-30">
                      <li className="mb-5">
                        <h6>
                          Subtotal :{" "}
                          <span className="ml-10 fz-16 main-color4">
                            ${calculateTotal()}
                          </span>
                        </h6>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
