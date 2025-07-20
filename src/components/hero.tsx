"use client";

import Component from "./magicui/beams";
import { RainbowButton } from "./magicui/rainbow-button";
import { Carousel } from "./magicui/carousel";

export default function HeroSection() {
  return (
    <div className="w-full h-fit relative">
      {" "}
      <div className="flex flex-col pt-28 pb-12 gap-20">
        <div className="flex flex-col z-20 w-full max-w-7xl mx-auto px-5 md:px-20">
          {" "}
          <h1 className="text-white text-6xl lg:text-7xl leading-none tracking-tight font-medium mb-8">
            Just Me — &
            <br /> Your Next Big Idea.
          </h1>
          <p className="text-foreground text-xl max-w-2xl mb-8">
            Crafting high-quality apps at a fraction of agency costs.
          </p>
          <RainbowButton size={"lg"} className="max-w-40">
            Learn More
          </RainbowButton>
        </div>
        <Carousel />
      </div>
      <div className="absolute inset-0 z-0">
        <Component
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
    </div>
  );
}
