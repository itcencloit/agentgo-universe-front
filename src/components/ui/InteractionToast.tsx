import React from "react";

type InteractionToastProps = {
  message: string | null;
  tone?: "info" | "success";
};

export const InteractionToast: React.FC<InteractionToastProps> = ({
  message,
  tone = "info",
}) => {
  if (!message) return null;

  const toneClass =
    tone === "success"
      ? "border-[#cde7d5] bg-[#f3fbf5] text-[#2e7d32]"
      : "border-[#c9d9f8] bg-white text-[#364457]";

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[60]">
      <div
        className={`min-w-[280px] max-w-[360px] rounded-2xl border px-4 py-3 shadow-[0_18px_40px_rgba(30,45,69,0.12)] backdrop-blur-sm transition-all ${toneClass}`}
      >
        <div className="flex items-start gap-3">
          {tone === "success" ? (
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2e7d32] text-[10px] font-bold text-white">
              ✓
            </div>
          ) : (
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3a5fd9] text-[10px] font-bold text-white">
              AI
            </div>
          )}
          <div className="text-sm font-semibold leading-6">{message}</div>
        </div>
      </div>
    </div>
  );
};
