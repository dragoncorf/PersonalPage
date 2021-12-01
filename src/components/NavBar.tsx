import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@components/MenuIcon";
import Link from "next/link";

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

      <MenuIcon />

      <ul className="extended-menu flex items-center space-x-4">
        <Link href="/#skills">
          <a>
            <li>Skills</li>
          </a>
        </Link>
        <Link href="/#projects">
          <a>
            <li>Projects</li>
          </a>
        </Link>
        <Link href="/#education">
          <a>
            <li>Education</li>
          </a>
        </Link>
      </ul>
      <style jsx>{`
        @media (max-width: 768px) {
          .extended-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
