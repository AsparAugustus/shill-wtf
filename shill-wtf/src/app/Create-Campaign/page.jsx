import Image from "next/image";
import CreateCampaignForm from "./CreateCampaignForm";


export default function CreateToken() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 
    bg-gradient-to-b from-white via-pink-200 to-pink-300">
      <div className="flex gap-10 h-[70vh]">
        <div className="border border-black h-[480px] w-[800px] justify-center rounded-3xl">


       
    <CreateCampaignForm />

        </div>
      


      
      </div>
    </main>
  );
}
