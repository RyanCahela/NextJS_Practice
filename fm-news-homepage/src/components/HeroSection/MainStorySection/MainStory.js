import React from "react";
import Image from "next/image";

function MainStory() {
  return (
    <div className="pb-16">
      <picture>
        <source
          media="(min-width:768px)"
          srcSet="/images/image-web-3-desktop.jpg"
        />
        <Image src="/images/image-web-3-mobile.jpg" width="1460" height="600" />
      </picture>
      <div className="flex flex-col gap-4 py-6">
        <h1 className="text-heading-lg font-bold">
          The Bright Future of Web 3.0?
        </h1>
        <p className="text-size-body text-color-gunmetal">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
      </div>
      <button className="button">Read More</button>
    </div>
  );
}

export default MainStory;
