import React from "react";
import { Link } from "react-router-dom";

const MuOrderRow = ({ order, index, setOrderClicked }) => {
  const { _id, paybleAmount, price, quantity, productName, image, paid } =
    order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={image ? image : ""} alt={productName} />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{price} Tk</td>
      <td>{quantity} Pis</td>
      <td>{paybleAmount} Tk</td>
      <td>
        {!paid ? (
          <Link
            to={`/dashboard/payment/${_id}`}
            class="btn btn-xs rounded-none bg-success text-white"
          >
            Pay
          </Link>
        ) : (
          <button
            // to={`/dashboard/payment/${_id}`}
            disabled
            class="btn btn-xs rounded-none bg-success text-white"
          >
            paid
          </button>
        )}
      </td>
      <td>
        {!paid && (
          <label
            onClick={() => setOrderClicked(order)}
            for="delete-modal"
            class="btn btn-xs rounded-none bg-error text-white"
          >
            Cancel
          </label>
        )}
      </td>
    </tr>
  );
};

export default MuOrderRow;
