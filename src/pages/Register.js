import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/carpenter-quality-bg.webp";
import logo from "../assets/image8-2.png";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import Loading from "../components/Loading";
import useToken from "../hooks/useToken";

const Register = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);

  if (gLoading || loading || updating) {
    return <Loading />;
  }

  if (token) {
    navigate("/");
    // console.log(gUser || user);
  }

  let signUpError;
  if (gError || error || updateError) {
    signUpError = (
      <p className="text-error">
        {gError?.message || error?.message || updateError?.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ displayName: data?.name });
    console.log(data);
  };
  return (
    <div className="mt-2">
      <div
        className="text-center py-16 bg-cover bg-center"
        style={{ background: `url(${bg})` }}
      >
        <h1 className="text-3xl font-bold text-white">ACCOUNT</h1>
        <h3 className="text-white mt-4">Home / Account</h3>
      </div>
      <div className="mx-auto mt-6 bg-accent p-6 w-[500px] ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name field ===================================================== */}
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name Is Required",
                },
              })}
              type="name"
              placeholder="Name"
              class="input input-bordered w-full py-1"
            />
            <label class="label">
              {errors.name?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors?.name?.message}
                </span>
              )}
              {errors.name?.type === "pattern" && (
                <span class="label-text-alt text-error">
                  {errors?.name?.message}
                </span>
              )}
            </label>
          </div>
          {/* email field ========================================================== */}
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Is Required",
                },
                pattern: {
                  value: /[A-Za-z]{3}/,
                  message: "Please put valid email",
                },
              })}
              type="email"
              placeholder="Email"
              class="input input-bordered w-full py-1"
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors?.email?.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-error">
                  {errors?.email?.message}
                </span>
              )}
            </label>
          </div>
          {/* password field =============================================================== */}
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password Is Required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be six characters or long",
                },
              })}
              type="password"
              placeholder="Password"
              class="input input-bordered w-full py-1"
            />
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-error">
                  {errors?.password?.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text-alt text-error">
                  {errors?.password?.message}
                </span>
              )}
            </label>
          </div>
          {signUpError}
          <input
            class="btn btn-primary w-1/3 rounded-none mt-4 mx-auto block text-primary bg-white hover:text-white capitalize font-bold hover:border-2"
            type="submit"
            value="Sign Up"
          />
          <div class="divider">OR</div>
        </form>
        <button
          onClick={() => signInWithGoogle()}
          class="flex btn btn-success w-1/2 rounded-none my-5 mx-auto  text-white hover:bg-white hover:text-primary capitalize font-bold hover:border-2"
        >
          <span>
            <img className="h-10" src={logo} alt="" />
          </span>
          <span className="">Google Sign Up</span>
        </button>
        <div className="flex justify-center gap-x-10">
          <Link className="hover:text-primary" to="/login">
            Sign In
          </Link>
          <Link className="hover:text-primary" to="/">
            Return To Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
