"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  MapPin,
  IndianRupee,
  Star,
  GraduationCap,
} from "lucide-react";

export default function ComparePage() {
  const [colleges, setColleges] = useState<any[]>([]);

  const [selected1, setSelected1] =
    useState<any>(null);

  const [selected2, setSelected2] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "/api/colleges"
      );

      setColleges(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white">
        
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-2xl font-semibold text-gray-300">
          Loading Comparison...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative py-24 px-6 border-b border-white/10 bg-gradient-to-br from-[#0f172a] via-[#111827] to-black">
        
        {/* GLOW EFFECTS */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 backdrop-blur-lg">
            
            <GraduationCap size={20} />

            Smart College Comparison
          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-extrabold">
            Compare
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Top Colleges
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Compare colleges side-by-side based on
            fees, ratings, courses and locations
            to make smarter educational decisions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        {/* SELECTORS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* SELECT 1 */}
          <select
            className="p-5 rounded-2xl bg-[#111827] border border-white/10 text-white outline-none focus:border-cyan-400 shadow-xl"
            onChange={(e) => {
              const college = colleges.find(
                (c) => c.id === e.target.value
              );

              setSelected1(college);
            }}
          >
            <option
              value=""
              className="bg-[#111827] text-white"
            >
              Select First College
            </option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
                className="bg-[#111827] text-white"
              >
                {college.name}
              </option>
            ))}
          </select>

          {/* SELECT 2 */}
          <select
            className="p-5 rounded-2xl bg-[#111827] border border-white/10 text-white outline-none focus:border-purple-400 shadow-xl"
            onChange={(e) => {
              const college = colleges.find(
                (c) => c.id === e.target.value
              );

              setSelected2(college);
            }}
          >
            <option
              value=""
              className="bg-[#111827] text-white"
            >
              Select Second College
            </option>

            {colleges.map((college) => (
              <option
                key={college.id}
                value={college.id}
                className="bg-[#111827] text-white"
              >
                {college.name}
              </option>
            ))}
          </select>
        </div>

        {/* EMPTY STATE */}
        {!selected1 || !selected2 ? (
          <div className="text-center py-24">
            
            <h2 className="text-4xl font-bold text-gray-400">
              Select Two Colleges
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Start comparing colleges side-by-side.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* COLLEGE 1 */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden hover:border-cyan-400/40 transition duration-300">
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                
                <img
                  src={selected1.image}
                  alt={selected1.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 px-4 py-2 rounded-full flex items-center gap-2">
                  <Star size={16} />
                  {selected1.rating}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  {selected1.name}
                </h2>

                <div className="mt-8 space-y-6">
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="text-cyan-400" />
                    {selected1.location}
                  </div>

                  <div className="flex items-center gap-3 text-gray-200">
                    <IndianRupee className="text-purple-400" />
                    ₹{selected1.fees}
                  </div>

                  <div className="text-gray-300 leading-7">
                    <span className="font-semibold text-white">
                      Courses:
                    </span>{" "}
                    {selected1.courses}
                  </div>

                  <div className="text-gray-400 leading-7">
                    {selected1.description}
                  </div>
                </div>
              </div>
            </div>

            {/* COLLEGE 2 */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden hover:border-purple-400/40 transition duration-300">
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                
                <img
                  src={selected2.image}
                  alt={selected2.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 px-4 py-2 rounded-full flex items-center gap-2">
                  <Star size={16} />
                  {selected2.rating}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                
                <h2 className="text-3xl md:text-4xl font-bold">
                  {selected2.name}
                </h2>

                <div className="mt-8 space-y-6">
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="text-cyan-400" />
                    {selected2.location}
                  </div>

                  <div className="flex items-center gap-3 text-gray-200">
                    <IndianRupee className="text-purple-400" />
                    ₹{selected2.fees}
                  </div>

                  <div className="text-gray-300 leading-7">
                    <span className="font-semibold text-white">
                      Courses:
                    </span>{" "}
                    {selected2.courses}
                  </div>

                  <div className="text-gray-400 leading-7">
                    {selected2.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}