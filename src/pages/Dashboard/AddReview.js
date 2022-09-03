import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch(`https://rocky-earth-57369.herokuapp.com/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result?.insertedId) {
      toast.success("Thanks For A Comment");
    }
    reset();
  };
  return (
    <div className="mx-auto mt-6 bg-accent p-6 w-[500px] gr">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* ratings field ========================================================== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Ratings</span>
          </label>
          <input
            {...register("rating", {
              required: {
                value: true,
                message: "Rating Is Required",
              },
            })}
            min="0"
            max="5"
            step="0.5"
            type="number"
            placeholder="Ratings will be 5 to 0"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.rating?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.rating?.message}
              </span>
            )}
          </label>
        </div>
        {/* comment field =============================================================== */}
        <div class="form-control w-full ">
          <label class="label">
            <span class="label-text">Comment</span>
          </label>
          <textarea
            {...register("comment", {
              required: {
                value: true,
                message: "Comment Is Required",
              },
            })}
            type="text"
            placeholder="Please Give A Comment"
            class="input input-bordered w-full py-1"
          />
          <label class="label">
            {errors.comment?.type === "required" && (
              <span class="label-text-alt text-error">
                {errors?.comment?.message}
              </span>
            )}
          </label>
        </div>
        <input
          class="btn btn-primary w-1/3 rounded-none mt-4 mx-auto block text-white hover:bg-white hover:text-primary capitalize font-bold hover:border-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
