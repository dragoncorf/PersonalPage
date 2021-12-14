import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@components/MenuIcon";
import Link from "next/link";

const NavBar: React.FC<{ currentRoute: string }> = ({ currentRoute }) => {
  const [showMobileView, setShowMobileView] = useState(true);
  return (
    <div className="flex fixed z-50 w-full px-6 pt-2 justify-between items-center bg-white">
      <Link href="/#">
        <a>
          <figure className="flex">
            <Image
              src="/icons/Diego.svg"
              alt="Image of Diego"
              width={75}
              height={75}
              objectFit="fill"
            />
          </figure>
        </a>
      </Link>

      <div className="menu">
        <div className="menu-icon flex justify-center items-center">
          <MenuIcon />
        </div>
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
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .extended-menu {
            display: none;
          }
          .menu-icon {
            width: 50px;
          }
          .menu-icon:hover {
            border-radius: 50%;
            background-color: #65c9ff;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default NavBar;
