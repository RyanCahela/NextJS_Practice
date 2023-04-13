import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <HeroSection />

      <section>
        <ul>
          <li>
            <Image src="/images/image-retro-pcs.jpg" width="250" height="254" />
            <span>01</span>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </li>
          <li>
            <Image
              src="/images/image-top-laptops.jpg"
              width="250"
              height="254"
            />
            <span>02</span>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </li>
          <li>
            <Image
              src="/images/image-gaming-growth.jpg"
              width="250"
              height="254"
            />
            <span>03</span>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
