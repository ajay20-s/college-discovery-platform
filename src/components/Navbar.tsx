"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
            
            <GraduationCap className="text-white" />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              CollegeHub
            </h1>

            <p className="text-gray-400 text-sm">
              Discover Top Colleges
            </p>
          </div>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-4">
          
          <Link
            href="/"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            href="/compare"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Compare
          </Link>

          <Link
            href="/saved"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Saved
          </Link>

          <Link
            href="/login"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2 rounded-xl hover:scale-105 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}