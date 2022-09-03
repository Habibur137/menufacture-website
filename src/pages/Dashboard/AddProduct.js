import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageKey = `80db67c7e18d76e5650b2c5e508a9456`;
  const onSubmit = async (data) => {
    const image = data.image[0];
    // get image url from cloud server =================================================
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    const formData = new FormData();
    formData.append("image", image);
    const result = await axios.post(url, formData);
    console.log(result);
    if (result.data.success) {
      const img = result?.data?.data?.url;
      const product = {
        image: img,
        name: data.name,
        price: data.price,
        Availability: data.quantity,
        minimumQuantity: data.minQuantity,
        desc: data.desc,
      };
      // post product to the database====================================================
      const res = await fetch(
        `https://rocky-earth-57369.herokuapp.com/product`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(product),
        }
      );
      const postData = await res.json();
      if (postData.insertedId) {
        toast.success("Product added succefully");
        reset();
      } else {
        toast.error("Failed to add product");
      }

      console.log(postData);
    }
    // console.log(data);
  };
  return (
    <div className="mx-auto mt-6 bg-accent p-6 w-[500px] gr">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ratings field ========================================================== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Product Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name Is Required",
              },
            })}
            type="text"
            placeholder="Product Name"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.name?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.name?.message}
              </span>
            )}
          </label>
        </div>
        {/* price field =============================================================== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: "Price Is Required",
              },
            })}
            type="number"
            placeholder="Add Price"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.price?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.price?.message}
              </span>
            )}
          </label>
        </div>
        {/* quantity field ================================================== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Available Quantity</span>
          </label>
          <input
            {...register("quantity", {
              required: {
                value: true,
                message: "Quantity Is Required",
              },
            })}
            type="number"
            placeholder="Add Price"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.quantity?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.quantity?.message}
              </span>
            )}
          </label>
        </div>
        {/* minimum quantity ============================================ */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Minimum Quantity</span>
          </label>
          <input
            {...register("minQuantity", {
              required: {
                value: true,
                message: "Price Is Required",
              },
            })}
            type="number"
            placeholder="Add  minimum quantity"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.minQuantity?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.minQuantity?.message}
              </span>
            )}
          </label>
        </div>
        {/* desc field ================================================== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            {...register("desc", {
              required: {
                value: true,
                message: "Quantity Is Required",
              },
            })}
            type="text"
            placeholder="Add Description"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.desc?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.desc?.message}
              </span>
            )}
          </label>
        </div>
        {/* img field ====================================================== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image Is Required",
              },
            })}
            type="file"
            placeholder="Add Price"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.image?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.image?.message}
              </span>
            )}
          </label>
        </div>
        <input
          class="btn btn-primary w-1/3 rounded-none mt-4 mx-auto block text-white hover:bg-white hover:text-primary capitalize font-bold hover:border-2"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
