/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import CalcomCalendar from "./calcom";
import SectionHeader from "./section-header";

export default function ContactSection() {
  return (
    <>
      <SectionHeader
        title="Contact"
        subtitle="Book an intro call"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />{" "}
      <CalcomCalendar />
    </>
  );
}
