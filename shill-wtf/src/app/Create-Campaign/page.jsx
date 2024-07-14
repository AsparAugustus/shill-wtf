"use client"
import Image from "next/image";
import CreateCampaignForm from "./CreateCampaignForm";
import { SlideInOut } from "../animations";


export default function CreateToken() {
  return (
    <SlideInOut>
    <main className="flex min-h-screen flex-col justify-center p-24 
    bg-gradient-to-b from-white via-yellow-200 to-yellow-300">
      <div style={{position: "relative", top:"-480px", left: "30%"}}>
        <CreateCampaignForm />
      </div>
    </main>
    </SlideInOut>
  );
}
