import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@components/MenuIcon";

const NavBar: React.FC<{ currentRoute: string }> = ({ currentRoute }) => {
  const [showMobileView, setShowMobileView] = useState(true);
  return (
    <div className="flex fixed w-full px-6 pt-2 justify-between items-center">
      <figure className="flex">
        <Image
          src="/icons/Diego.svg"
          alt="Image of Diego"
          width={75}
          height={75}
          objectFit="fill"
        />
      </figure>
      {showMobileView ? (
        <MenuIcon />
      ) : (
        <ul className="flex items-center space-x-4">
          <li>Skills</li>
          <li>Projects</li>
          <li>Education</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
