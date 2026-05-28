"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function SavedPage() {
  const [savedColleges, setSavedColleges] =
    useState<any[]>([]);

  useEffect(() => {
    fetchSavedColleges();
  }, []);

  const fetchSavedColleges = async () => {
    try {
      const response = await axios.get(
        "/api/saved-colleges"
      );

      setSavedColleges(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] p-8 text-white">
      
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-5xl font-bold mb-10">
          Saved Colleges
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          
          {savedColleges.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
              
              <img
                src={item.college.image}
                alt={item.college.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                
                <h2 className="text-2xl font-bold">
                  {item.college.name}
                </h2>

                <p className="mt-2 text-gray-600">
                  {item.college.location}
                </p>

                <p className="mt-2">
                  ₹{item.college.fees}
                </p>

                <p className="mt-2">
                  ⭐ {item.college.rating}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}