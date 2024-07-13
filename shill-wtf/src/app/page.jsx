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
        style={{width: "38vw", position: 'relative', zIndex:"-2", top:"-100px"}}
        priority
      />
      <Image
        src="/indexPage/index-frontend.png"
        alt="nav-bottom"
        width={1400}
        height={100}
        style={{width: "68vw", position: 'relative', zIndex:"-2", top:"-130px"}}
        priority
      />
    </main>
  );
}
