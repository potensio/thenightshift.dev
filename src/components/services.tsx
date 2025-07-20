/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Code, LayoutTemplate, Unplug, Workflow } from "lucide-react";
import Image from "next/image";
import { SpotlightCard } from "./magicui/spotlight-card";

import SectionHeader from "./section-header";
import { AutomationIllustration } from "./automation";
import { SoftwareDevelopmentIllustration } from "./software-development";

export default function ServicesSection() {
  return (
    <section className="w-full py-24 px-4 flex flex-col items-center border-b border-l border-r border-dashed border-secondary">
      <SectionHeader
        title="Services"
        subtitle="Things I’m good at "
        description="Lorem ipsum dolor sit amet"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {/* Web Application */}
        <SpotlightCard
          className="w-full p-5 md:p-8"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white text-lg font-medium mb-4">
            <Code className="size-5 text-white stroke-1" />
            Software Development
          </div>

          <p className="mb-5 text-lg text-muted-foreground">
            Custom apps built with solid stacks. Scalable, fast, and easy to
            maintain in the long run.
          </p>
          <div className="flex gap-4 mb-6">
            <Image
              src="/typescript-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
            <Image
              src="/react-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
            <Image
              src="/next-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
            <Image
              src="/neon-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
          </div>
          {/* <div className="relative w-full h-[320px]">
            <Image
              src="/porto-1.webp"
              alt="Deskripsi gambar"
              fill
              style={{
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div> */}
          <SoftwareDevelopmentIllustration />
        </SpotlightCard>

        {/* Automation */}
        <SpotlightCard
          className="w-full"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white text-lg mb-4">
            <Workflow className="size-5 text-white stroke-1" />
            Workflow Automation
          </div>

          <p className="mb-5" style={{ color: "var(--paragraph-text)" }}>
            Let bots do the boring stuff. Automate with n8n, connect your tools,
            and scale without the stress.
          </p>
          {/* <div className="flex gap-4 mb-6">
            <Image
              src="/n8n-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
            <Image
              src="/open-ai-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
          </div> */}
          <AutomationIllustration />
        </SpotlightCard>

        {/* No Code Development */}
        {/* <SpotlightCard
          className="w-full md:col-span-2"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white text-lg mb-4">
            <LayoutTemplate className="size-5 text-white stroke-1" />
            Low-Code MVP
          </div>

          <p className="mb-5" style={{ color: "var(--paragraph-text)" }}>
            Got an idea? Let’s ship visually with less code. Validate quick and
            tweak quicker.
          </p>
          <div className="flex gap-4 mb-6">
            <Image
              src="/bubble-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
          </div>
        </SpotlightCard> */}

        {/* Plugin */}
        {/* <SpotlightCard
          className="w-full md:row-span-2"
          // spotlightColor="rgba(0, 229, 255, 0.2)" // Optional: override default spotlight color
        >
          <div className="flex items-center gap-2 text-white text-lg mb-4">
            <Unplug className="size-5 text-white stroke-1" />
            Plugin Development
          </div>

          <p className="mb-5" style={{ color: "var(--paragraph-text)" }}>
            Need more power in Bubble? I build custom plugins that do what
            default can’t — APIs, features, you name it.
          </p>
          <div className="flex gap-4 mb-6">
            <Image
              src="/bubble-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
            <Image
              src="/js-logo.svg"
              alt="Deskripsi gambar"
              width={20}
              height={20}
            />
          </div>
        </SpotlightCard> */}
      </div>
    </section>
  );
}
