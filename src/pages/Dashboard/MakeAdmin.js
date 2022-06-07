import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users-pipe", async () => {
    return await axios.get(`https://rocky-earth-57369.herokuapp.com/user`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  });
  if (isLoading) {
    return <Loading />;
  }
  console.log(users?.data);
  return (
    <div class="overflow-x-auto">
      <table class="table w-5/6 mx-auto mt-8">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Serial</th>
            <th>Name</th>
            <th>Email</th>
            <th>Make Admin</th>
            <th>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {users?.data?.map((user, index) => (
            <UserRow refetch={refetch} user={user} key={index} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;
