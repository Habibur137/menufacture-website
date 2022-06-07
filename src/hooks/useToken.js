import { useEffect, useState } from "react";
import axios from "axios";

const useToken = (user) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    console.log(user);
    const email = user?.user?.email;
    const name = user?.user?.displayName;
    if (email || name) {
      (async () => {
        const { data } = await axios.put(
          `https://rocky-earth-57369.herokuapp.com/user/${email}`,
          { email, name }
        );
        const token = data.token;
        localStorage.setItem("accessToken", token);
        setToken(token);
        console.log("inside useToken", data);
      })();
    }
    console.log("inside useEffect", email, name);
  }, [user]);
  return [token];
};

export default useToken;
