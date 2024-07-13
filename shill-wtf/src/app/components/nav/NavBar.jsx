import React from "react";
import WagmiButton from "../buttons/WagmiButton"
const NavBar = () => {
  return (
    <div className="flex justify-between pt-4 px-10" style={{width: '100vw'}}>
      <p className="text-4xl">SHILL . WTF</p>
      <button class="bg-sky-500 px-2 pt-2 rounded-lg text-4xl">CONNECT WALLET</button>
    </div>
  );
};

export default NavBar;
