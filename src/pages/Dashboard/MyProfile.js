import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  const [update, setUpdate] = useState(false);

  console.log(profile);

  useEffect(() => {
    // get profile====================================================
    (async () => {
      const res = await fetch(
        `https://rocky-earth-57369.herokuapp.com/profile/${user?.email}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const result = await res.json();
      setProfile(result);
      setUpdate((up) => up);
    })();
  }, [user, update]);
  if (loading) {
    return <Loading />;
  }
  const profileUpdate = async (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const number = e.target.number.value;
    const location = e.target.location.value;
    const updateInfo = {
      education,
      number,
      location,
    };

    // update profile====================================================
    const res = await fetch(
      `https://rocky-earth-57369.herokuapp.com/profile/${user?.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updateInfo),
      }
    );

    const result = await res.json();

    if (result?.acknowledged) {
      toast.success("Profile Updated");
      setUpdate(!update);
    }

    console.log(result);
    e.target.reset();
  };
  return (
    <div className="gr">
      <h1 className="text-success font-bold">
        <span className="text-slate-500">Name:</span> {user?.displayName}
      </h1>
      <h1 className="text-success font-bold">
        <span className="text-slate-500">Email:</span> {user?.email}
      </h1>
      <h1 className="text-success font-bold">
        <span className="text-slate-500">Education:</span>{" "}
        {profile?.education && profile?.education}
      </h1>
      <h1 className="text-success font-bold">
        <span className="text-slate-500">Phone:</span>{" "}
        {profile?.number && profile?.number}
      </h1>
      <h1 className="text-success font-bold">
        <span className="text-slate-500">Location:</span>{" "}
        {profile?.location && profile?.location}
      </h1>
      <div className="mt-5">
        <h3 className="text-3xl text-slate-500 font-bold mb-2">
          Update Your Information.
        </h3>
        <form onSubmit={profileUpdate}>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold text-slate-400">
                Your Education
              </span>
            </label>
            <label class="input-group">
              <span className="bg-warning text-white">Education</span>
              <input
                name="education"
                type="text"
                placeholder="Your Education"
                class="input input-bordered"
              />
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold text-slate-400">
                Your Number
              </span>
            </label>
            <label class="input-group">
              <span className="bg-warning text-white">Number</span>
              <input
                name="number"
                type="text"
                placeholder="Your Number"
                class="input input-bordered"
              />
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold text-slate-400">
                Your Location
              </span>
            </label>
            <label class="input-group">
              <span className="bg-warning text-white">Location</span>
              <input
                name="location"
                type="text"
                placeholder="Your Location"
                class="input input-bordered"
              />
            </label>
          </div>
          <button className="btn btn-success mt-5 rounded-none text-white font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
