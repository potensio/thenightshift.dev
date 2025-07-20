import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export const SectionBordered = ({ children, className = "" }: SectionProps) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col items-center border-y border-dashed",
        className
      )}
    >
      <div className="max-w-7xl w-full py-12 lg:py-24 px-5 md:px-10 lg:px-20 border-x border-dashed">
        {" "}
        {children}
      </div>
    </div>
  );
};

export const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <div
      className={cn(
        "max-w-[1440px] w-full flex flex-col items-center py-24 px-5 md:px-10 lg:px-20 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
