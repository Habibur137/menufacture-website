import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import DeleteModal from "./DeleteModal";
import MuOrderRow from "./MuOrderRow";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [orderClicked, setOrderClicked] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("orderPerEmail", async () => {
    return await axios.get(
      `https://rocky-earth-57369.herokuapp.com/order/${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
  });
  if (products?.status === 401 || products?.status === 403) {
    signOut(auth);
    navigate("/");
    localStorage.removeItem("accessToken");
  }
  if (isLoading || loading) {
    return <Loading />;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-5/6 mx-auto mt-8">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Payble Amount</th>
            <th>Pay Bill</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {products?.data?.map((order, index) => (
            <MuOrderRow
              setOrderClicked={setOrderClicked}
              order={order}
              key={index}
              index={index}
            />
          ))}
        </tbody>
      </table>
      {orderClicked && (
        <DeleteModal refetch={refetch} orderClicked={orderClicked} />
      )}
    </div>
  );
};

export default MyOrders;
