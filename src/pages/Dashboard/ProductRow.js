import React from "react";

const ProductRow = ({ product, index, setOrderClicked }) => {
  const { Availability, name, image, price } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{Availability}</td>
      <td>
        <label
          onClick={() => setOrderClicked(product)}
          for="product-delete-modal"
          class="btn btn-xs rounded-none bg-error text-white"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
