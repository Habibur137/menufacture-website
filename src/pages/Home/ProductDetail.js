import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [user, loading] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);
  const [quantityError, setQuantityError] = useState("");
  const { productId } = useParams();
  // grap single product data ==========================================================
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("singleProduct", async () => {
    return await axios.get(
      `https://rocky-earth-57369.herokuapp.com/product/${productId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
  });
  if (isLoading || loading) {
    return <Loading />;
  }
  const { name, image, price, minimumQuantity, Availability, desc, details } =
    product?.data;

  //  product Availability calculation ========================================
  const newAvailableProduct = Availability - parseInt(quantity);

  // input quantity check handler ======================================================
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
    if (quantity < minimumQuantity) {
      setQuantityError(`You have to buy at least ${minimumQuantity}`);
    } else if (quantity > Availability) {
      setQuantityError(
        "Order Quantity Must Be Smaller Than Available Quantity"
      );
    } else {
      setQuantityError("");
    }
  };
  // order place handler =================================================================
  const handleOrder = async () => {
    const orderInfo = {
      buyerEmail: user?.email,
      buyerName: user?.displayName ? user?.displayName : "",
      productName: name,
      quantity,
      price,
      image: image,
      paybleAmount: price * quantity,
    };
    console.log(product.image);
    // order a product ===================================================================
    const res = await fetch(`https://rocky-earth-57369.herokuapp.com/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orderInfo),
    });
    const data = await res.json();

    console.log(data);
    if (data.insertedId) {
      toast.success("Order Placed");
      // updat product quantity after buying =====================================================
      const res = await fetch(
        `https://rocky-earth-57369.herokuapp.com/product/${productId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ Availability: newAvailableProduct }),
        }
      );
      const data = await res.json();
      refetch();
      console.log(data);
    }
    // console.log(orderInfo);
  };

  // console.log(quantity)
  return (
    <div>
      <div class="hero min-h-[70vh]  bg-base-100">
        <div class="hero-content items-center flex-col lg:flex-row">
          <img
            className="w-1/2 h-[70vh]"
            src={image}
            class="max-w-lg rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-1/2">
            <h1 class="text-4xl font-bold">{name}</h1>
            <div className="flex gap-x-16 mt-6">
              <div className="text-2xl">
                <p>Price</p>
                <p className="my-6">Availability </p>
                <p>Minimum Quantity </p>
              </div>
              <div className="text-2xl">
                <p>{price} Tk</p>
                <p className="my-6">
                  {Availability < minimumQuantity ? "Stock Out" : Availability}
                </p>
                <p>{minimumQuantity}</p>
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 font-semibold block" for="quantity">
                Quantity You Buy
              </label>
              <input
                id="quantity"
                type="number"
                min={minimumQuantity}
                max={Availability}
                step="20"
                placeholder={`Minimum Quantity ${minimumQuantity}`}
                onChange={handleQuantity}
                class="input input-bordered w-full max-w-xs"
              />
              <p className="text-error mt-1">{quantityError}</p>
            </div>
            <button
              onClick={handleOrder}
              disabled={quantity < minimumQuantity || quantity > Availability}
              class="mt-8 capitalize btn btn-primary rounded-none text-white hover:bg-white hover:text-primary border-2 px-12 "
            >
              Buy It Now
            </button>
          </div>
        </div>
      </div>
      {/* description card ========================= */}
      <div class="card w-full px-4 lg:px-16 bg-base-100 shadow-xl">
        <div class="card-body">
          <p>{desc ? desc : "description Here"}</p>
          <h3 className="text-2xl mt-3 font-semibold">
            A lot of pain is a lot
          </h3>
          <p>{details ? details : "Details here"}</p>
          <h3 className="text-2xl mt-3 font-semibold">Busey is very smart</h3>

          <p>
            Tortor at the author's urn I hate long time clinical dishes. Tortor
            sauce for the fringe who or the eros till and hate. He likes to be
            put in the memories of the mass and the pain of the lake. The pure
            chocolate always needs to be at the earth at the urn of the sauce.
            Eu facilisis, but hate the disease{" "}
          </p>

          <h3 className="text-2xl mt-3 font-semibold">It is very important</h3>
          <p>
            At the entrance of the earth at the entrance of the earth. The
            pressure of life is always a semblance of a nice valley. Cras felis
            nunc commodo eu convallis vitae interdum non nisl. Maecenas ac est
            sit amet augue pharetra convallis nec danos dui. Cras suscipit quam
            et turpis eleifend vitae malesuada magna congue. We give it to the
            bears. But my life is from my survey and the price of it. None of
            those who are just at the beginning of the game will demean the
            loremous. The bed of the weekend hangs in the bed, so that the
            dishes are pure cushion. The author is very important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
