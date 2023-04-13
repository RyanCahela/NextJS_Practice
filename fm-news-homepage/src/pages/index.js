import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-4">
      <Header />
      <section>
        {/* Hero News Story */}
        <div>
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
          <div className="flex flex-col gap-4 py-6">
            <h1 className="text-heading-lg font-bold">
              The Bright Future of Web 3.0?
            </h1>
            <p className="text-body">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
          </div>
          <button className="button">Read More</button>
        </div>
        {/* Breaking News Section */}
        <div>
          <h2>New</h2>
          <ul>
            <li>
              <h3>Hydrogen Vs Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </li>
            <li>
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </li>
            <li>
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </li>
          </ul>
        </div>
      </section>
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
