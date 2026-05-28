import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl mt-20">
      
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              
              <GraduationCap
                size={34}
                className="text-blue-400"
              />

              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                CollegeFinder
              </h2>
            </div>

            <p className="text-gray-400 mt-5 leading-7">
              Discover top colleges, compare
              institutions and make smarter
              educational decisions.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              
              <Link
                href="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                href="/compare"
                className="hover:text-white transition"
              >
                Compare
              </Link>

              <Link
                href="/saved"
                className="hover:text-white transition"
              >
                Saved Colleges
              </Link>
            </div>
          </div>

          {/* FEATURES */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Features
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              
              <p>College Search</p>
              <p>Compare Colleges</p>
              <p>Save Favorites</p>
              <p>Smart Filtering</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect
            </h3>

            <div className="flex gap-5">
              
              <a
                href="#"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                GitHub
              </a>

              <a
                href="#"
                className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-gray-500">
          © 2026 CollegeFinder. Built with Next.js & PostgreSQL.
        </div>
      </div>
    </footer>
  );
}