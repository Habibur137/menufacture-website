import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { name, email, role } = user;
  const makeAdmin = async () => {
    const res = await fetch(
      `https://rocky-earth-57369.herokuapp.com/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (res.status === 403) {
      toast.error("Failed making an admin");
    }
    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast("Made an admin successfully");
      refetch();
    }
    console.log(data);
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <button class="btn btn-xs rounded-none bg-success text-white">
            Already Admin
          </button>
        ) : (
          <button
            onClick={makeAdmin}
            class="btn btn-xs rounded-none bg-success text-white"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-xs rounded-none bg-error text-white">
          Delete User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
