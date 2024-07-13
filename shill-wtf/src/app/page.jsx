import Image from "next/image";
import NavBar from "./components/nav/NavBar.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar/>
      <h1 className="text-3xl">Home</h1>
    </main>
  );
}
