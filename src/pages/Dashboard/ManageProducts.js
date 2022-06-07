import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import ProductDeleteModal from "../../components/ProductDeleteModal";

import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [orderClicked, setOrderClicked] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("allProducts", async () => {
    return await axios.get(`https://rocky-earth-57369.herokuapp.com/product`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div class="overflow-x-auto">
      <table class="table w-5/6 mx-auto mt-8">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Photo</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {products?.data?.map((product, index) => (
            <ProductRow
              setOrderClicked={setOrderClicked}
              product={product}
              key={index}
              index={index}
            />
          ))}
        </tbody>
      </table>
      {orderClicked && (
        <ProductDeleteModal refetch={refetch} orderClicked={orderClicked} />
      )}
    </div>
  );
};

export default ManageProducts;
