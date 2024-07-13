import Image from "next/image";
// import NavBar from "./components/nav/NavBar.jsx"

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24
bg-gradient-to-b from-white via-yellow-50 to-yellow-300
      "
    >
      <Image
        src="/indexPage/popups.png"
        alt="nav-bottom"
        width={1000}
        height={100}
        style={{
          width: "38vw",
          position: "relative",
          zIndex: "0",
          top: "-100px",
        }}
        priority
      />
      <Image
        src="/indexPage/index-frontend.png"
        alt="nav-bottom"
        width={1400}
        height={100}
        style={{
          width: "68vw",
          position: "relative",
          zIndex: "0",
          top: "-120px",
        }}
        priority
      />
    </main>
  );
}
