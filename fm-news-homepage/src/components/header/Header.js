import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuDarkTransparentBG = `
before:block
before:fixed
before:bg-black/50
before:inset-0
before:z-10
`;

const menuBaseClasses = `
${/* INTERNAL LAYOUT */ ""}
flex 
flex-col
pt-36
px-6
space-y-6
w-9/12

${/* POSITION ON PAGE*/ ""}
inset-y-0
right-0 
fixed
z-20

${/* COLORS */ ""}
bg-color-almost-white

${/* ANIMATION */ ""}
transition-transform
`;

const openMenuClasses = `
transform-x-0
${menuDarkTransparentBG}
`;

const closeMenuClasses = `
  transform-x-full
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={`flex justify-between fixed top-0 inset-x-0 pt-7 pb-8`}
      >
        <Image src="/images/logo.svg" width="64" height="40" />
        <button
          className="absolute top-0 right-0 z-30"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {isOpen ? (
            <div>
              <Image src="/icons/menu-close.svg" width="30" height="30" />
            </div>
          ) : (
            <div>
              <Image src="/icons/menu-open.svg" width="40" height="17" />
            </div>
          )}
        </button>
        <ul
          className={`${menuBaseClasses} ${
            isOpen ? `${openMenuClasses}` : `${closeMenuClasses}`
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/new">New</Link>
          </li>
          <li>
            <Link href="/popular">Popular</Link>
          </li>
          <li>
            <Link href="/trending">Trending</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
