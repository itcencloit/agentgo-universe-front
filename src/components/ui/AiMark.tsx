import React from "react";
import aiIcon from "../../assets/ai.png";

type AiMarkProps = {
  size?: "sm" | "md" | "lg";
};

const sizeClassMap = {
  sm: {
    wrap: "h-7 w-7",
    icon: "h-4 w-4",
  },
  md: {
    wrap: "h-8 w-8",
    icon: "h-5 w-5",
  },
  lg: {
    wrap: "h-10 w-10",
    icon: "h-6 w-6",
  },
} as const;

export const AiMark: React.FC<AiMarkProps> = ({ size = "md" }) => {
  const classes = sizeClassMap[size];

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] ${classes.wrap}`}
    >
      <img src={aiIcon} alt="AI" className={classes.icon} />
    </div>
  );
};
