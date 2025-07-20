import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

export function SoftwareDevelopmentIllustration() {
  return (
    <Terminal>
      <TypingAnimation>&gt; npm run build</TypingAnimation>

      <AnimatedSpan delay={800} className="text-blue-500">
        <span>Building optimized production bundle...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1300} className="text-green-500">
        <span>✔ Compiled successfully</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1800} className="text-green-500">
        <span>✔ Static optimization completed</span>
      </AnimatedSpan>

      <TypingAnimation delay={2200} className="text-muted-foreground">
        &gt; vercel --prod
      </TypingAnimation>

      <AnimatedSpan delay={2800} className="text-yellow-500">
        <span>🔗 Deploying to production...</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3300} className="text-green-500">
        <span>✔ Build completed in 24s</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3800} className="text-green-500">
        <span>✔ Deployment ready</span>
      </AnimatedSpan>

      <TypingAnimation delay={4200} className="text-emerald-400 font-semibold">
        🚀 Live at: https://yoursite.vercel.app
      </TypingAnimation>
    </Terminal>
  );
}
