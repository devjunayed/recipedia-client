"use client";

import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

// Define TypeScript interface for form inputs
interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-soft-cream p-8 rounded-lg shadow-md max-w-md mx-auto mt-8 font-sans">
      <h3 className="text-center text-charcoal-gray text-2xl font-semibold mb-6">
        Log In
      </h3>
      {isSubmitSuccessful && (
        <p className="text-fresh-mint text-center text-lg mb-4">
          Login successful!
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <span className="text-crimson-red text-sm mt-1 block">
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
            <span className="text-crimson-red text-sm mt-1 block">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-coral-red text-black border hover:bg-primary border-primary py-2 rounded-md hover:bg-opacity-90 transition duration-200 mt-4"
        >
          Log In
        </button>
      </form>
      <p className="text-center text-charcoal-gray text-sm mt-4">
        Forgot your password?{" "}
        <Link
          className="text-coral-red hover:underline"
          href="/forgot-password"
        >
          Reset it here
        </Link>
      </p>
      <p className="text-center text-charcoal-gray text-sm mt-4 ">
        Don&quot;t have an account?{" "}
        <Link className="text-coral-red hover:underline" href="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
