import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/FirebaseConfig.init";
import Loading from "../../Shared/Loading";

const Signup = () => {
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
    const [user,loading] = useAuthState(auth);
  const [
    createUserWithEmailAndPassword,
    createuser,
    createuserLoading,
    createuserError,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if(createuserLoading || googleloading || updating){
    return <Loading/>
  }
  const onSubmit = async(data) => {
   await createUserWithEmailAndPassword(data.email, data.password);
   await updateProfile({ displayName:data.name });
  };
  return (
    <div class="hero min-h-screen bg-base-200 mt-8">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <form onSubmit={handleSubmit(onSubmit)} class="card-body">
          <h1 className="text-2xl font-bold text-center mb-2">Sign Up</h1>
          <div className="form-control -mb-3">
            <label class="label">
              <span class="label-text">User name</span>
            </label>
            <input
              type="text"
              placeholder="User name"
              class="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "User name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control -mb-3">
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
          <div class="form-control -mb-3">
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
            </div>
          </div>
          <div class="form-control mt-3">
            {createuserError && (
              <p className="text-sm text-red-600 text-center mb-2">
                {createuserError.message}
              </p>
            )}
            <button type="submit" class="btn btn-accent">
              Sign Up
            </button>
          </div>
          <p className="text-sm text-center">
            Already have an account? Login{" "}
            <span className="text-blue-600">
              <Link to="/login">here</Link>
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

export default Signup;
