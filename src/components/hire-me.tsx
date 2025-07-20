"use client";

import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { SpotlightCard } from "./magicui/spotlight-card";
import { Check } from "lucide-react";
import { RainbowButton } from "./magicui/rainbow-button";

export default function HireMeSection() {
  return (
    <section className="flex flex-col md:flex-row gap-12">
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col">
          <AnimatedGradientText className="mb-2">Pricing</AnimatedGradientText>
          <h2 className="text-white text-5xl md:text-6xl font-medium">
            Give me a shot!
          </h2>
        </div>

        <div className="w-full">
          {" "}
          {/* Hourly */}
          <div className="flex flex-col border-b border-border py-8 gap-3">
            <div className="flex flex-row gap-1 items-center">
              <h4 className="text-xl font-medium">Hourly</h4>
              <p className="border border-border w-fit rounded-full px-2">
                $24 per hour
              </p>
            </div>
            <p className="">
              Unlimited requests, multiple projects — no scope limits. Perfect
              for startups that move fast and iterate often.
            </p>
          </div>
          {/* Project Based */}
          <div className="flex flex-col py-8 gap-3">
            <div className="flex flex-row gap-1 items-center">
              <h4 className="text-xl font-medium">Project Based</h4>
              <p className="border border-border w-fit rounded-full px-2">
                Starting from $3800
              </p>
            </div>
            <p className="">
              Great for clear, one-off projects. Fixed scope, fixed price — no
              surprises. You’ll know exactly what you’re getting before we
              start.
            </p>
          </div>
          <RainbowButton size={"lg"} className="w-fit mt-5">
            Schedule Call
          </RainbowButton>
        </div>
      </div>

      <div className="flex flex-col w-full gap-4">
        {/* 30 days warranty */}
        <SpotlightCard
          className="w-full h-fit p-5 gap-1"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white">
            <Check className="size-5 text-green-400 stroke-1" />
            30-day warranty
          </div>
          <p style={{ color: "var(--paragraph-text)" }}>
            Spend at least $2K and get warranty for 14 days after delivery.
          </p>
        </SpotlightCard>

        {/* Frequent updates */}
        <SpotlightCard
          className="w-full h-fit p-5 gap-1"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white">
            <Check className="size-5 text-green-400 stroke-1" />
            Frequent updates
          </div>
          <p style={{ color: "var(--paragraph-text)" }}>
            Get progress updates every 2 days via Loom, always in the loop.
          </p>
        </SpotlightCard>

        {/* Direct communication */}
        <SpotlightCard
          className="w-full h-fit p-5 gap-1"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white">
            <Check className="size-5 text-green-400 stroke-1" />
            Direct communication
          </div>
          <p style={{ color: "var(--paragraph-text)" }}>
            No middlemen, no outsource. Just me — zero misalignment.
          </p>
        </SpotlightCard>

        {/* Agency quality, solo price */}
        <SpotlightCard
          className="w-full h-fit p-5 gap-1"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white">
            <Check className="size-5 text-green-400 stroke-1" />
            Agency quality, solo price
          </div>
          <p style={{ color: "var(--paragraph-text)" }}>
            Deliver top-tier work at a fraction of agency cost.
          </p>
        </SpotlightCard>
      </div>
    </section>
  );
}
