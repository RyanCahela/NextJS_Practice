import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <header>
        <Image src="/images/logo.svg" width="64" height="40" />
        <ul>
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
      <section>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet="/images/image-web-3-desktop.jpg"
          />
          <Image
            src="/images/image-web-3-mobile.jpg"
            width="1460"
            height="600"
          />
        </picture>
      </section>
      <section>User Specific News</section>
    </main>
  );
}
