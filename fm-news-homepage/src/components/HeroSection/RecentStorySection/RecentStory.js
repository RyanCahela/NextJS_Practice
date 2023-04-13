import React from "react";

const jsonData = {
  recentStories: [
    {
      headline: "Hydrogen Vs Electric Cars",
      tagline: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      headline: "The Downsides of AI Artistry",
      tagline:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      headline: "Is VC Funding Drying Up?",
      tagline:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ],
};

function RecentStory() {
  return (
    <div className="bg-color-dark-space-blue py-6 px-5">
      <h2 className="text-size-heading-md text-color-yellow">New</h2>
      <ul className="divide-y divide-gunmetal">
        {jsonData.recentStories.map((story) => {
          return (
            <li className="pb-7 divide-solid">
              <h3 className="text-color-almost-white text-size-heading-sm pt-8">
                {story.headline}
              </h3>
              <p className="text-color-silver text-size-heading-body pt-2">
                {story.tagline}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecentStory;
