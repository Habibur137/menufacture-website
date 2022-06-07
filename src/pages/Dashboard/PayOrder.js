import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";

import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L2vYCGUyBiWccpmmz33cM6FCrjVkVfP3Lk8MBEI2owqYAWmGx9qpy3Uf5yqlPMUgvYnKCZF4w0r2lvnyEzSAq2o00RPrd50Vm"
);

const PayOrder = () => {
  const [user, loading] = useAuthState(auth);
  const { orderId } = useParams();
  // grap single product data ==========================================================
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["singleOrder", orderId], async () => {
    return await axios.get(
      `https://rocky-earth-57369.herokuapp.com/order/${user?.email}/${orderId}`,
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
  console.log(orders.data);
  const {
    productName,
    image,
    price,
    quantity,
    paybleAmount,
    buyerName,
    buyerEmail,
  } = orders?.data;

  return (
    <div className="grid lg:grid-cols-2 gap-6 px-8 lg:px-20">
      <div class="card w-lg bg-base-100 shadow-xl mt-8">
        <figure>
          <img className="h-36" src={image} alt={productName} />
        </figure>
        <div class="card-body">
          <h3 className="text-xl font-bold  text-success ">
            Hello, {buyerName}
          </h3>
          <h3 className="text-xl font-bold text-warning ">
            Please Pay For {productName}
          </h3>
          <p className="text-slate-500 font-semibold">
            Product Price {price} Tk
          </p>
          <p className="text-slate-500 font-semibold">
            You Orderd {quantity} Pis
          </p>
          <p className="text-slate-500 font-semibold">
            Payable Amount {paybleAmount} Tk
          </p>
        </div>
      </div>
      <div class="card p-20 w-lg bg-base-100 shadow-xl mt-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm orders={orders?.data} />
        </Elements>
      </div>
    </div>
  );
};

export default PayOrder;
