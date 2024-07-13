import React from "react";
import WagmiButton from "../buttons/WagmiButton"
const NavBar = () => {
  return (
    <div className="flex justify-between" style={{width: '500px'}}>
      <p>shill.wtf</p>

      <button class="bg-sky-500 px-2 rounded-sm">Connect Wallet</button>
    </div>
  );
};

export default NavBar;
