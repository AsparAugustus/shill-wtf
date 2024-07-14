"use client"
import {useState} from 'react'
import Image from "next/image";
import CreateCampaignForm from "./CreateCampaignForm";
import { SlideInOut } from "../animations";

const MarketingParameterForm = () => {
  const [formData, setFormData] = useState({
    duration: 4,
    viewExponent: 0.625,
    minFollowers: 10,
    minImpressions: 50,
    maxMentions: 8,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-xl uppercase" style={{border: "1px solid #888", width: "300px"}}>
      <p className="text-2xl  mb-4 uppercase">Campaign Parameters</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="startDate" className="uppercase">Epoch Duration (weeks)</label>
          <input 
            type="number" 
            id="startDate" 
            name="startDate" 
            value={formData.duration} 
            onChange={handleChange} 
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="viewExponent" className="uppercase">View Exponent:</label>
          <input 
            type="number" 
            step="0.001" 
            id="viewExponent" 
            name="viewExponent" 
            value={formData.viewExponent} 
            onChange={handleChange} 
            className="border p-2"
          />
        </div>
        <div className="flex flex-col uppercase">
          <label htmlFor="minFollowers">Minimum Followers:</label>
          <input 
            type="number" 
            id="minFollowers" 
            name="minFollowers" 
            value={formData.minFollowers} 
            onChange={handleChange} 
            className="border p-2"
          />
        </div>
        <div className="flex flex-col uppercase">
          <label htmlFor="minImpressions">Minimum Impressions:</label>
          <input 
            type="number" 
            id="minImpressions" 
            name="minImpressions" 
            value={formData.minImpressions} 
            onChange={handleChange} 
            className="border p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="maxMentions">Maximum Mentions:</label>
          <input 
            type="number" 
            id="maxMentions" 
            name="maxMentions" 
            value={formData.maxMentions} 
            onChange={handleChange} 
            className="border p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default function CreateToken() {
  return (
    <SlideInOut>
    <main className="flex min-h-screen flex-col justify-center p-24 
    bg-gradient-to-b from-white via-pink-200 to-pink-300
        ">
        <div style={{position: "absolute", top: "370px", right: "250px", zIndex:"100"}}>
          <MarketingParameterForm/>  
        </div>
      <div style={{position: "relative", top:"-480px", left: "30%"}}>
        <CreateCampaignForm />
      </div>
    </main>
    </SlideInOut>
  );
}
