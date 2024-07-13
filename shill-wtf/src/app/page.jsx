import Image from "next/image";
// import NavBar from "./components/nav/NavBar.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/indexPage/popups.png"
        alt="nav-bottom"
        width={1000}
        height={100}
        style={{width: "60vw", position: 'relative', zIndex:"-2", top:"-40px"}}
        priority
      />
      <h1 className="text-5xl">HOME</h1>
    </main>
  );
}
