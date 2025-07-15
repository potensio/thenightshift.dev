import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export function AnimatedGradientTextDemo() {
  return (
    <AnimatedGradientText
      speed={2}
      colorFrom="#4ade80"
      colorTo="#06b6d4"
      className="text-4xl font-semibold tracking-tight"
    >
      Fast Gradient
    </AnimatedGradientText>
  );
}
