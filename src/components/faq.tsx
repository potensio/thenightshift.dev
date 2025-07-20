"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SectionHeader from "./section-header";

export default function FAQSection() {
  return (
    <>
      <SectionHeader
        title="Questions"
        subtitle="Frequently Asked"
        description="Answers to common questions about my services, process, and what you can expect. I offer both traditional coding and low-code development (using Bubble, my preferred full-stack low-code platform)."
      />
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-[720px]"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            Do you build with code or no-code?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              I do both! I build custom solutions with code (TypeScript, React,
              Next.js, etc.) and also offer low-code development using Bubble.
              Bubble is my preferred low-code platform because it covers the
              full stack and allows for rapid, scalable development—perfect for
              MVPs and fast iterations.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            What kind of projects do you take on?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              I specialize in building custom web applications, automating
              workflows, and integrating tools for startups, small businesses,
              and entrepreneurs. Whether you need a new product, an MVP, or want
              to automate repetitive tasks, I can help.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            Who will I be working with?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              Just me! You’ll work directly with the developer (that’s me) from
              start to finish. No middlemen, no outsourcing, and no
              miscommunication—just clear, direct collaboration.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">
            What technologies do you use?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              I use modern, proven technologies like TypeScript, React, Next.js,
              Neon or Supabase. For automation, I connect tools like using n8n
              to OpenAI, Zapier, Google Workspace, Notion, and more.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg">
            How does your pricing work?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              I offer both hourly ($24/hr) and project-based pricing (starting
              from $3800). Hourly is great for ongoing or flexible work;
              project-based is best for well-defined scopes. Every project comes
              with transparent estimates and no hidden fees.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg">
            Can I pause or stop anytime?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              Absolutely! You’re free to pause or stop the project at any
              time—no long-term contracts, no lock-ins, and no pressure.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-lg">
            What’s your process like?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              After an intro call to discuss your needs, I’ll propose a plan and
              timeline. You’ll get progress updates every 2 days (via Loom or
              email), and I’m always available for direct communication. No
              middlemen—just you and me.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-lg">
            Do you offer any guarantees?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              Yes! For projects over $2,000, I offer a 14-day warranty after
              delivery. If you find any issues or need tweaks, I’ll fix them at
              no extra cost during this period.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-lg">
            Can you automate my business processes?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              Absolutely. I can automate repetitive tasks, connect your favorite
              tools, and set up workflows that save you time and reduce errors.
              Let’s talk about what you want to automate!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-lg">
            How do I get started?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance text-lg">
            <p>
              Just book an intro call or send me an email through the contact
              section. We’ll discuss your goals and see if we’re a good fit!
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
