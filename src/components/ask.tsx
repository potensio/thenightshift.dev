import { SpotlightCard } from "./magicui/spotlight-card";
import { RainbowButton } from "./magicui/rainbow-button";

export default function AskSection() {
  return (
    <>
      <SpotlightCard className="p-8 md:p-16 max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-between">
        {" "}
        <div className="space-y-4">
          <h3 className="text-white text-3xl md:text-4xl font-medium">
            Can’t find the answer you’re looking for?
          </h3>
          <p className="text-lg">
            I’d love to help. Just send me an email or check the FAQ again.
          </p>
        </div>
        <a href="mailto:hanifyaskur@gmail.com" className="w-full md:w-fit">
          <RainbowButton size={"lg"} className="w-full md:w-fit">
            Email Me
          </RainbowButton>
        </a>
      </SpotlightCard>
    </>
  );
}
