import { AnimatedGradientText } from "./magicui/animated-gradient-text";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function SectionHeader({
  title = "Title",
  subtitle = "Subtitle",
  description = "Lorem ipsum",
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-12 ">
      <AnimatedGradientText className="mb-2">{title}</AnimatedGradientText>
      <h2 className="text-white text-5xl md:text-6xl font-medium mb-4 text-center">
        {subtitle}
      </h2>
      <p className="text-white/70 text-base md:text-lg text-center max-w-xl hidden">
        {description}
      </p>
    </div>
  );
}
