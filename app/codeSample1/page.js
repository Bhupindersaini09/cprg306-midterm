"use client";

import Portfolio from "@/components/portfolio";
import Image from "next/image";

const CodeSample1 = () => {
  return (
    <div className="h-screen bg-white text-black">
      <div className="bg-gray-200 h-[100px] flex items-center justify-center">
        <p className="text-center">
          Here is a sample portfolio page. One the left is an unstyled page and
          on the right a minimally styled page. Use this page to answer your
          tailwind css questions.{" "}
        </p>
      </div>
      <div className="flex h-full">
        <div className="flex-1">
          <Portfolio />
        </div>
        <div className="flex-1 bg-gray-100 flex item-center justify-center">
          <Image
            src="/PortfolioPage.png"
            alt="porfolio page"
            height={600}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeSample1;
