import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "./MenuIcon";

const NavBar: React.FC<{ currentRoute: string }> = ({ currentRoute }) => {
  const [showMobileView, setShowMobileView] = useState(true);
  return (
    <div className="flex fixed w-full px-10 pt-2 justify-between items-center">
      <figure>
        <Image src="/Diego.png" alt="Image of Diego" width={75} height={75} />
      </figure>
      {showMobileView ? (
        <MenuIcon />
      ) : (
        <ul className="flex items-center space-x-4">
          <li>Skills & Tools</li>
          <li>Projects</li>
          <li>Education</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
