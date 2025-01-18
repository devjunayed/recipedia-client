"use client";
import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "@/actions/registerUser";
import toast, { Toaster } from "react-hot-toast";

// Define TypeScript interface for form inputs
export interface IFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    watch,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    let response = undefined;
    await toast.promise(registerUser(data), {
      loading: "Loading",
      success: (res) => {
        response = res;
        return "";
      },
      error: (err) => {
        response = err;
        return "";
      },
    });
    // const res = await registerUser(data);

    if (response?.success) {
      toast.success("Registration successful!", {
        duration: 4000,
        position: "top-center",
      });
    } else {
      toast.error(response?.message);
    }
  };

  const password = watch("password");

  return (
    <div className="bg-soft-cream p-8 rounded-lg shadow-md max-w-md mx-auto mt-8 font-sans">
      <Toaster />
      <h3 className="text-center text-charcoal-gray text-2xl font-semibold mb-6">
        Register
      </h3>
      {/* {isSubmitSuccessful && (
        <p className="text-fresh-mint text-center text-lg mb-4">
          Registration successful!
        </p>
      )} */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div className="mb-4">
          <label className="block text-charcoal-gray font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-coral-red"
            {...register("username", {
              required: "Name is required",
            })}
          />
          {errors.username && (
            <span className="text-danger text-sm mt-1 block">
              {errors.username.message}
            </span>
          )}
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-charcoal-gray font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-coral-red"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-danger text-sm mt-1 block">
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-charcoal-gray font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-coral-red"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-danger text-sm mt-1 block">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-charcoal-gray font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-coral-red"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span className="text-danger text-sm mt-1 block">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-coral-red text-black hover:text-white border-primary border hover:bg-primary  py-2 rounded-md hover:bg-opacity-90 transition duration-200 mt-4"
        >
          Register
        </button>
      </form>
      <p className="text-center text-charcoal-gray text-sm mt-4">
        Already have an account?{" "}
        <Link className="text-coral-red hover:underline" href="/login">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
