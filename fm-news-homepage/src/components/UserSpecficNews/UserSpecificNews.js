import React from "react";
import Image from "next/image";

const jsonData = {
  userNews: [
    {
      headline: "Reviving Retro PCs",
      tagline: "What happens when old PCs are given modern upgrades?",
      thumbnailData: {
        imageUri: "/images/image-retro-pcs.jpg",
        height: "127",
        width: "100",
      },
    },
    {
      headline: "Top 10 Laptops of 2022",
      tagline: "Our best picks for various needs and budgets.",
      thumbnailData: {
        imageUri: "/images/image-top-laptops.jpg",
        height: "127",
        width: "100",
      },
    },
    {
      headline: "The Growth fo Gaming",
      tagline: "How the pandemic has sparked fresh opportunities",
      thumbnailData: {
        imageUri: "/images/image-gaming-growth.jpg",
        height: "127",
        width: "100",
      },
    },
  ],
};

function UserSpecificNews() {
  return (
    <section className="pt-16">
      <ul className="space-y-8">
        {jsonData.userNews.map((story, index) => {
          return (
            <li className="flex gap-6" key={story.headline}>
              <Image
                src={story.thumbnailData.imageUri}
                width={story.thumbnailData.width}
                height={story.thumbnailData.height}
              />
              <div className="flex flex-col">
                <span className="text-color-silver text-size-heading-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-color-space-blue text-size-heading-sm pt-3">
                  {story.headline}
                </h3>
                <p className="text-size-body text-color-gunmetal pt-2">
                  {story.tagline}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default UserSpecificNews;
