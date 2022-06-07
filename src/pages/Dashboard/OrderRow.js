import React from "react";

const OrderRow = ({ order, index }) => {
  console.log(order);
  const { buyerEmail, paybleAmount, price, quantity, productName } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{buyerEmail}</td>
      <td>{productName}</td>
      <td>{price} Tk</td>
      <td>{quantity} Pis</td>
      <td>{paybleAmount} Tk</td>
      <td>
        <button class="btn btn-xs rounded-none bg-success text-white">
          Pay
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
