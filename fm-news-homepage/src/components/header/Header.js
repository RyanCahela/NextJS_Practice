import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-between pt-7 pb-8">
      <Image src="/images/logo.svg" width="64" height="40" />
      <ul className="flex items-center gap-2">
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
