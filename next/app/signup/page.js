"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config"; // Ensure this path is correct
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUpHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("user signed up", { email, password });
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex  justify-center items-center min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-green-100">
      <div className="container rounded-lg border-2 py-24 px-16 border-green-400  bg-gray-200 shadow-lg mx-auto justify-center items-center max-w-md ">
        <h2 className="text-4xl font-bold">
          {" "}
          Welcome to <strong className="text-green-400">Purse Pilot</strong>
        </h2>
        <form onSubmit={SignUpHandler} className="mt-6">
          <p> Enter your email</p>
          <input
            type="email"
            placeholder="rxn114392@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border text-gray-500 hover:border-green-500 border-green-300 rounded-md shadow-sm p-2 mb-4 w-full bg-gray-50"
            required
          />
          <p> Enter your password</p>
          <input
            type="password"
            placeholder="skadoosh"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border text-gray-500 hover:border-green-500 border-green-300 bg-gray-50 shadow-md rounded-sm p-2 mb-4 w-full"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r  from-green-400 to-blue-500 hover:shadow-sm font-bold hover:text-black hover:bg-gradient-to-l hover:shadow-green-500 text-white p-2 rounded w-full mt-4"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
