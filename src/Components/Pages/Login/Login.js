import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../../Firebase/FirebaseConfig.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, signinUser, signinLoading, signinError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
    if(signinLoading || googleloading){
        return <Loading/>
    }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} class="card-body">
          <h1 className="text-2xl font-bold text-center mb-3">Login</h1>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 characters or longer",
                },
              })}
            />
            <div className="flex justify-between items-center">
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
          </div>
          <div class="form-control mt-6">
          {signinError && (
              <p className="text-sm text-red-600 text-center mb-2">
                {signinError.message}
              </p>
            )}
            <button type="submit" class="btn btn-accent">
              Login
            </button>
          </div>
          <p className="text-sm text-center">
            New to doctors portal? Create an account{" "}
            <span className="text-blue-600">
              <Link to="/signup">here</Link>
            </span>
          </p>
          <div class="divider">OR</div>
            {googleerror && (
              <p className="text-sm text-red-600 text-center mb-2">
                {googleerror.message}
              </p>
            )}
            <button
              onClick={() => signInWithGoogle()}
              class="btn btn-outline btn-primary"
            >
              Continue with google
            </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
