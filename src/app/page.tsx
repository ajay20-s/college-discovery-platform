"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MapPin,
  IndianRupee,
  Star,
  Search,
  TrendingUp,
  Trophy,
} from "lucide-react";

export default function HomePage() {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] =
    useState("");
  const [feeFilter, setFeeFilter] =
    useState("");

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

  const filteredColleges = colleges.filter(
    (college: any) => {
      const matchesSearch =
        college.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesLocation =
        locationFilter === "" ||
        college.location === locationFilter;

      const matchesFees =
        feeFilter === "" ||
        college.fees <= Number(feeFilter);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesFees
      );
    }
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white">
        
        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-6 text-2xl font-semibold text-gray-300">
          Loading Colleges...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#050816] min-h-screen text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-black py-24 px-6 border-b border-white/10">
        
        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 backdrop-blur-lg">
            India's Smart College Discovery Platform
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            Find Your
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Dream College
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Discover top colleges, compare fees,
            placements, ratings and make smarter
            career decisions with our intelligent
            college discovery platform.
          </p>

          {/* SEARCH */}
          <div className="mt-14 max-w-4xl mx-auto">
            
            <div className="relative">
              
              <Search
                className="absolute left-5 top-5 text-gray-400"
                size={22}
              />

              <input
                type="text"
                placeholder="Search colleges..."
                className="w-full pl-14 p-5 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 text-white placeholder-gray-400 outline-none focus:border-cyan-400 shadow-2xl"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            {/* FILTERS */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <select
                className="p-4 rounded-2xl bg-[#111827] border border-white/10 text-white outline-none"
                value={locationFilter}
                onChange={(e) =>
                  setLocationFilter(
                    e.target.value
                  )
                }
              >
                <option value="" className="bg-[#111827]">
                  All Locations
                </option>

                <option value="Delhi" className="bg-[#111827]">
                  Delhi
                </option>

                <option value="Mumbai" className="bg-[#111827]">
                  Mumbai
                </option>

                <option value="Chennai" className="bg-[#111827]">
                  Chennai
                </option>

                <option value="Hyderabad" className="bg-[#111827]">
                  Hyderabad
                </option>

                <option value="Tamil Nadu" className="bg-[#111827]">
                  Tamil Nadu
                </option>

                <option value="Rajasthan" className="bg-[#111827]">
                  Rajasthan
                </option>

                <option value="Kolkata" className="bg-[#111827]">
                  Kolkata
                </option>
              </select>

              <select
                className="p-4 rounded-2xl bg-[#111827] border border-white/10 text-white outline-none"
                value={feeFilter}
                onChange={(e) =>
                  setFeeFilter(
                    e.target.value
                  )
                }
              >
                <option value="" className="bg-[#111827]">
                  Any Fees
                </option>

                <option value="100000" className="bg-[#111827]">
                  Below ₹1 Lakh
                </option>

                <option value="200000" className="bg-[#111827]">
                  Below ₹2 Lakhs
                </option>

                <option value="300000" className="bg-[#111827]">
                  Below ₹3 Lakhs
                </option>

                <option value="400000" className="bg-[#111827]">
                  Below ₹4 Lakhs
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              500+
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Colleges Listed
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              50K+
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Students Helped
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              95%
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </section>

      {/* COLLEGES */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Top Colleges
            </h2>

            <p className="text-gray-400 mt-3 text-lg">
              Explore India's best institutions
            </p>
          </div>

          <div className="mt-6 md:mt-0 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl text-gray-300 backdrop-blur-lg">
            {filteredColleges.length} Colleges Found
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {filteredColleges.map((college: any) => (
            <div
              key={college.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-[1.02] hover:border-cyan-400/40 transition duration-300 shadow-2xl"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                
                <img
                  src={college.image}
                  alt={college.name}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 px-4 py-2 rounded-full flex items-center gap-2">
                  <Star size={16} />
                  {college.rating}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                
                <h3 className="text-2xl md:text-3xl font-bold">
                  {college.name}
                </h3>

                <div className="flex items-center gap-2 text-gray-300 mt-5">
                  <MapPin
                    size={18}
                    className="text-cyan-400"
                  />
                  {college.location}
                </div>

                <div className="flex items-center gap-2 text-gray-200 mt-3">
                  <IndianRupee
                    size={18}
                    className="text-purple-400"
                  />
                  ₹{college.fees}
                </div>

                {/* PLACEMENT STATS */}
                <div className="mt-6 space-y-3">
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <TrendingUp size={16} />
                      Average Package
                    </div>

                    <span className="text-cyan-400 font-semibold">
                      {college.averagePackage}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">
                      Placement Rate
                    </span>

                    <span className="text-green-400 font-semibold">
                      {college.placementRate}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Trophy size={16} />
                      Ranking
                    </div>

                    <span className="text-purple-400 font-semibold">
                      {college.ranking}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 mt-5 leading-7">
                  {college.description}
                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex gap-4">
                  
                  <Link
                    href={`/college/${college.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-2xl hover:scale-105 transition text-center shadow-lg"
                  >
                    View Details
                  </Link>

                  <Link
                    href="/compare"
                    className="border border-white/20 text-white px-5 rounded-2xl hover:bg-white/10 transition flex items-center justify-center"
                  >
                    Compare
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}