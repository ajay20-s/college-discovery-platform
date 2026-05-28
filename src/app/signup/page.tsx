"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Lock,
  GraduationCap,
} from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "/api/auth/signup",
        formData
      );

      toast.success(response.data.message);

      router.push("/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center overflow-hidden px-6 relative">
      
      {/* GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* CARD */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 shadow-2xl">
        
        {/* LOGO */}
        <div className="flex justify-center">
          
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl">
            
            <GraduationCap
              size={40}
              className="text-white"
            />
          </div>
        </div>

        {/* TITLE */}
        <div className="text-center mt-8">
          
          <h1 className="text-4xl font-extrabold text-white">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3">
            Start exploring India's best colleges
          </p>
        </div>

        {/* FORM */}
        <div className="mt-10 space-y-5">
          
          {/* NAME */}
          <div className="relative">
            
            <User
              size={20}
              className="absolute left-4 top-5 text-gray-400"
            />

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white/10 border border-white/10 pl-12 p-4 rounded-2xl text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            
            <Mail
              size={20}
              className="absolute left-4 top-5 text-gray-400"
            />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/10 pl-12 p-4 rounded-2xl text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            
            <Lock
              size={20}
              className="absolute left-4 top-5 text-gray-400"
            />

            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-white/10 border border-white/10 pl-12 p-4 rounded-2xl text-white placeholder-gray-400 outline-none focus:border-cyan-400 transition"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-2xl hover:scale-[1.02] transition shadow-2xl font-semibold text-lg"
          >
            {loading
              ? "Creating Account..."
              : "Signup"}
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}

          <a
            href="/login"
            className="text-cyan-400 hover:underline"
          >
            Click here to Login
          </a>
        </p>
      </div>
    </div>
  );
}