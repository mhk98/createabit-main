import Image from "next/image";
import product1 from "../../../../images/LCD-VIDEO-WALL-47 (1).jpg";
import product2 from "../../../../images/Wall-Mount-Models.jpg";

import Link from "next/link";
import product3 from "../../../../images/42-inch-lcd-digital-signage.jpg";
import product5 from "../../../../images/Mirror-advertising-player.jpg";
import product6 from "../../../../images/Touch-Screen-Kiosk2.jpg";
import product4 from "../../../../images/Touch-table3.jpg";
import { useGetProductsQuery } from "@/features/product/products";
import { useCreateCartMutation } from "@/features/cart/cart";
import { useState } from "react";
const ProductShop1 = () => {
  const { data } = useGetProductsQuery();
  console.log("products", data?.data);
  const products = data?.data;

  const [createCart, { isLoading, isError }] = useCreateCartMutation();

  const addToCart = (product) => {
    console.log("productDetails", product);
    createCart(product);
  };

  return (
    <div className="container">
      <div
        className="row  justify-center align-middle mx-auto gap-5"
        style={{ margin: "160px 0px" }}
      >
        {products?.map((product) => (
          <div className="col-lg-3" key={product.id}>
            <Image
              src={`http://localhost:5000/${product.image}`}
              alt=""
              width={300}
              height={200}
            />
            <h4>{product.title}</h4>
            <p>{product.text}</p>
            <p style={{ fontWeight: "700" }}>${product.price}</p>

            <div className="purchase mt-4">
              <button
                onClick={() => addToCart(product)}
                className="butn butn-md butn-bord radius-30"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShop1;
