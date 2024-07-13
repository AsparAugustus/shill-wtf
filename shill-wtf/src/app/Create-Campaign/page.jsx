"use client"
import Image from "next/image";
import CreateCampaignForm from "./CreateCampaignForm";
import { SlideInOut } from "../animations";


export default function CreateToken() {
  return (
    <SlideInOut>
    <main className="flex min-h-screen flex-col items-center justify-center p-24 
    bg-gradient-to-b from-white via-yellow-200 to-yellow-300">
      <div className="flex gap-10 h-[70vh]">
        <div className="border border-black h-[380px] w-[800px] justify-center rounded-3xl">


       
    <CreateCampaignForm />

        </div>
      


      
      </div>
    </main>
    </SlideInOut>
  );
}
