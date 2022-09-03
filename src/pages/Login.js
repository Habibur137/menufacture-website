import React from "react";
import bg from "../assets/carpenter-quality-bg.webp";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/image8-2.png";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(gUser || user);

  if (gLoading || loading) {
    return <Loading />;
  }
  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
    // console.log(gUser || user);
  }

  let signUpError;
  if (gError || error) {
    signUpError = (
      <p className="text-error">{gError?.message || error?.message}</p>
    );
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <motion.div
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.3, type: "spring", stiffness: 110 }}
      className="mt-2"
    >
      <div
        className="text-center py-16 bg-cover bg-center"
        style={{ background: `url(${bg})` }}
      >
        <h1 className="text-3xl font-bold text-white">ACCOUNT</h1>
        <h3 className="text-white mt-4">Home / Account</h3>
      </div>
      <div className="mx-auto mt-6 bg-accent p-6 w-[500px] ">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <input
            class="btn btn-primary w-1/3 rounded-none mt-4 mx-auto block text-white hover:bg-white hover:text-primary capitalize font-bold hover:border-2"
            type="submit"
            value="Sign In"
          />
          {signUpError}
          <div class="divider">OR</div>
        </form>
        <button
          onClick={() => signInWithGoogle()}
          class="flex btn btn-success w-1/2 rounded-none my-5 mx-auto  text-white hover:bg-white hover:text-primary capitalize font-bold hover:border-2"
        >
          <span>
            <img className="h-10" src={logo} alt="" />
          </span>
          <span className="">Google Sign In</span>
        </button>
        <div className="flex justify-between px-8">
          <button className="hover:text-primary">Forgot your password?</button>
          <Link className="hover:text-primary" to="/register">
            Sign Up
          </Link>
          <Link className="hover:text-primary" to="/">
            Return To Store
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
