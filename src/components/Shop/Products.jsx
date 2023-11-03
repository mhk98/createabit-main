//= Data
import { useGetProductsQuery } from "@/features/product/products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
function Products({ lightMode }) {
  // const dispatch = useDispatch();
  const router = useRouter();
  function openList(e) {
    e.stopPropagation();
    const options = document.querySelector(".select-options");
    if (options.style.display === "none") options.style.display = "block";
    else options.style.display = "none";
    document.querySelector(".select-styled").classList.toggle("active");
  }

  function handleItemClick(e) {
    e.stopPropagation();
    document.querySelector(".select-styled").classList.remove("active");
    document.querySelector(".select-styled").innerHTML =
      e.currentTarget.innerHTML;
    document.querySelector("select").value =
      e.currentTarget.getAttribute("rel");
    document.querySelector(".select-options").style.display = "none";
  }

  const { data, isLoading, isError, error } = useGetProductsQuery();

  const products = data?.data;

  console.log("products", products);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.Product_Id === product.Product_Id)) {
      alert("This product is already in the cart.");
    } else {
      // Create a new cart with the added product
      const updatedCart = [...cart, product];
      setCart(updatedCart);

      // Save the updated cart data to local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      // Show a success toast message to indicate that the product has been added
      toast.success("Product added to the cart");
      // window.location.reload();
      router.refresh();
    }
  };

  return (
    <div className="col-lg-9">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="shop-products">
          <div className="mb-40 top-side d-flex align-items-end">
            <div>
              <h6 className="fz-16 line-height-1">Showing 1–9 of 12 results</h6>
            </div>
            <div className="ml-auto">
              <div className="select">
                <select
                  className="form-control select-hidden"
                  onClick={openList}
                >
                  <option value="Most Popular">Most Popular</option>
                  <option value="Sort by average rating">
                    Sort by average rating
                  </option>
                  <option value="Price [Lowest to Highest]">
                    Price [Lowest to Highest]
                  </option>
                  <option value="Price [Highest to Lowest]">
                    Price [Highest to Lowest]
                  </option>
                </select>
                <div className="select-styled" onClick={openList}>
                  Most Popular
                </div>
                <ul className="select-options">
                  <li rel="Most Popular" onClick={handleItemClick}>
                    Most Popular
                  </li>
                  <li rel="Sort by average rating" onClick={handleItemClick}>
                    Sort by average rating
                  </li>
                  <li rel="Price [Lowest to Highest]" onClick={handleItemClick}>
                    Price [Lowest to Highest]
                  </li>
                  <li rel="Price [Highest to Lowest]" onClick={handleItemClick}>
                    Price [Highest to Lowest]
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link href="">
            <div className="row">
              {products?.map((item) => (
                <div className="col-md-6 col-lg-4" key={item.Product_Id}>
                  <div className="item mb-50">
                    <div className="img">
                      <Image
                        src={`https://createabit-backend.onrender.com/${item.image}`}
                        alt=""
                        width={300}
                        height={200}
                      />
                      <button
                        onClick={() => addToCart(item)}
                        className="text-white add-cart"
                      >
                        Add to Cart
                      </button>
                      <span className="fav">
                        <i className="far fa-heart"></i>
                      </span>
                    </div>
                    <div className="cont">
                      <div className="rate">
                        {/* {new Array(item.stars).fill().map((_, i) => (
                        <i className="fas fa-star" key={i}></i>
                      ))}
                      {new Array(5 - item.stars).fill().map((_, i) => (
                        <i className="far fa-star" key={i}></i>
                      ))} */}
                      </div>
                      <h6>{item.title}</h6>
                      <h5>${item.price}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Link>
          {/* <div className="pagination d-flex justify-content-center mt-30">
          <ul className="rest">
            <li className="active">
              <a href="#0">1</a>
            </li>
            <li>
              <a href="#0">2</a>
            </li>
            <li>
              <a href="#0">
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div> */}
        </div>
      ) : null}
    </div>
  );
}

export default Products;
