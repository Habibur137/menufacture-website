import React from "react";
import { toast } from "react-toastify";

const ProductDeleteModal = ({ orderClicked, refetch }) => {
  console.log(orderClicked);
  const { _id, name } = orderClicked;
  const deleteOrder = () => {
    fetch(`https://rocky-earth-57369.herokuapp.com/product/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data?.deletedCount) {
          toast.success("Removed Order");
        }
        console.log(data);
      });
  };
  return (
    <div>
      {/* <!-- The button to open modal --> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-error text-center">
            Are You Sure?
          </h3>
          <h3 class="font-bold text-lg text-error text-center">
            You Want To Cancel
            <span className="text-success"> {name}</span>
          </h3>

          <div class="modal-action justify-center">
            <label onClick={deleteOrder} for="product-delete-modal" class="btn">
              Yes!
            </label>
            <label for="product-delete-modal" class="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
