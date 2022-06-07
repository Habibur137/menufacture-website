import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import OrderRow from "./OrderRow";

const ManageOrders = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("allProducts", async () => {
    return await axios.get(`https://rocky-earth-57369.herokuapp.com/order`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  });
  if (isLoading) {
    return <Loading />;
  }
  console.log(products?.data);
  return (
    <div class="overflow-x-auto">
      <table class="table w-5/6 mx-auto mt-8">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Buyer Email</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Payble Amount</th>
            <th>Pay Bill</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {products?.data?.map((order, index) => (
            <OrderRow order={order} key={index} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
