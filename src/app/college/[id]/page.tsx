"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  MapPin,
  IndianRupee,
  Star,
  TrendingUp,
  Trophy,
  GraduationCap,
  Building2,
} from "lucide-react";

export default function CollegeDetailPage() {
  const params = useParams();

  const [college, setCollege] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (params?.id) {
      fetchCollege();
    }
  }, [params]);

  const fetchCollege = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `/api/colleges/${params.id}`
      );

      setCollege(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCollege = async () => {
    try {
      const response = await axios.post(
        "/api/save-college",
        {
          collegeId: college.id,
        }
      );

      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(
        error.response?.data?.error ||
          "Something went wrong"
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white">
        
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-2xl font-semibold text-gray-300">
          Loading College Details...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative">
        
        {/* IMAGE */}
        <div className="relative h-[500px] overflow-hidden">
          
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* GLOW */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

          {/* CONTENT */}
          <div className="absolute bottom-10 left-0 right-0">
            
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                
                <div>
                  <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-5 py-2 rounded-full backdrop-blur-lg mb-6">
                    
                    <GraduationCap size={18} />

                    Premier Institution
                  </div>

                  <h1 className="text-4xl md:text-7xl font-extrabold">
                    {college.name}
                  </h1>

                  <div className="flex flex-wrap gap-6 mt-6 text-gray-200 text-lg">
                    
                    <div className="flex items-center gap-2">
                      <MapPin size={20} />
                      {college.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <IndianRupee size={20} />
                      ₹{college.fees}
                    </div>
                  </div>
                </div>

                {/* RATING */}
                <div className="bg-green-500/20 border border-green-500/30 backdrop-blur-lg px-6 py-4 rounded-3xl flex items-center gap-3">
                  
                  <Star
                    size={28}
                    className="text-green-300"
                  />

                  <div>
                    <p className="text-3xl font-bold text-green-300">
                      {college.rating}
                    </p>

                    <p className="text-sm text-green-200">
                      Student Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        {/* OVERVIEW */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            College Overview
          </h2>

          <p className="text-gray-300 leading-9 text-lg">
            {college.description}
          </p>

          {/* COURSES */}
          <div className="mt-14">
            
            <h2 className="text-3xl font-bold mb-6">
              Courses Offered
            </h2>

            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-3xl p-8 text-cyan-300 text-lg leading-8">
              
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={24} />
                Available Programs
              </div>

              {college.courses}
            </div>
          </div>

          {/* PLACEMENT STATS */}
          <div className="mt-16">
            
            <h2 className="text-3xl font-bold mb-8">
              Placement Statistics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* AVG PACKAGE */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-cyan-400/40 transition">
                
                <TrendingUp
                  size={40}
                  className="mx-auto text-cyan-400"
                />

                <h3 className="mt-5 text-gray-400">
                  Average Package
                </h3>

                <p className="mt-4 text-4xl font-bold text-cyan-400">
                  {college.averagePackage}
                </p>
              </div>

              {/* HIGHEST PACKAGE */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-green-400/40 transition">
                
                <Trophy
                  size={40}
                  className="mx-auto text-green-400"
                />

                <h3 className="mt-5 text-gray-400">
                  Highest Package
                </h3>

                <p className="mt-4 text-4xl font-bold text-green-400">
                  {college.highestPackage}
                </p>
              </div>

              {/* PLACEMENT RATE */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-purple-400/40 transition">
                
                <Star
                  size={40}
                  className="mx-auto text-purple-400"
                />

                <h3 className="mt-5 text-gray-400">
                  Placement Rate
                </h3>

                <p className="mt-4 text-4xl font-bold text-purple-400">
                  {college.placementRate}
                </p>
              </div>
            </div>
          </div>

          {/* RANKING */}
          <div className="mt-16">
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">
              
              <div className="flex items-center gap-4">
                
                <Trophy
                  size={42}
                  className="text-yellow-400"
                />

                <div>
                  <h2 className="text-3xl font-bold">
                    National Ranking
                  </h2>

                  <p className="mt-2 text-2xl text-yellow-400 font-semibold">
                    {college.ranking}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* STUDENT REVIEWS */}
          <div className="mt-16">
            
            <h2 className="text-3xl font-bold mb-8">
              Student Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* REVIEW 1 */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition">
                
                <div className="flex items-center gap-2 mb-4">
                  
                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />
                </div>

                <p className="text-gray-300 leading-8 text-lg">
                  "Excellent placements and coding
                  culture. Faculty are supportive and
                  campus life is amazing."
                </p>

                <div className="mt-6">
                  
                  <p className="text-cyan-400 font-semibold">
                    Rahul Sharma
                  </p>

                  <p className="text-gray-500 text-sm">
                    Computer Science Engineering
                  </p>
                </div>
              </div>

              {/* REVIEW 2 */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400/30 transition">
                
                <div className="flex items-center gap-2 mb-4">
                  
                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />

                  <Star
                    size={18}
                    className="text-yellow-400"
                  />
                </div>

                <p className="text-gray-300 leading-8 text-lg">
                  "One of the best learning
                  environments with strong industry
                  exposure and internships."
                </p>

                <div className="mt-6">
                  
                  <p className="text-purple-400 font-semibold">
                    Priya Verma
                  </p>

                  <p className="text-gray-500 text-sm">
                    Information Technology
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-16 flex flex-col md:flex-row gap-5">
            
            <button
              onClick={handleSaveCollege}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-5 rounded-2xl hover:scale-[1.02] transition shadow-2xl text-lg font-semibold"
            >
              Save College
            </button>

            <button className="flex-1 border border-white/20 text-white px-8 py-5 rounded-2xl hover:bg-white/10 transition text-lg font-semibold">
              Compare College
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}