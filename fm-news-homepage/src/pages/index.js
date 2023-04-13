import { Inter } from "next/font/google";
import Header from "../components/header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import UserSpecificNews from "@/components/UserSpecficNews/UserSpecificNews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-4 pb-12 relative">
      <Header />
      <HeroSection />
      <UserSpecificNews />
    </main>
  );
}
