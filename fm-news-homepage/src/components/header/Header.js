import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuStyles = `
flex 
flex-col 

inset-y-0 

absolute 
bg-color-almost-white
pt-36
px-6
space-y-6
w-9/12
translate-x-full`;

const openMenuStyles = `
translate-0
`;

const headerPsudoElement = `
before:block
before:absolute
before:bg-black/50
before:inset-0
`;

function Header() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <header
      className={`flex justify-between pt-7 pb-8 ${
        isOpen ? headerPsudoElement : ""
      }`}
    >
      <Image src="/images/logo.svg" width="64" height="40" />
      <button
        className="absolute top-0 right-0 z-10"
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
      <ul className={`${menuStyles} ${isOpen ? `${openMenuStyles}` : ""}`}>
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
  );
}

export default Header;
