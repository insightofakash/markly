import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef(function Button(
  { children, disabled, styles },
  props,
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={twMerge(
        disabled
          ? "hidden md:block md:bg-[#E6E6E6] md:text-stone-400 px-[26px] py-[10px] rounded-full"
          : "bg-hl-col px-[26px] py-[10px] rounded-full text-[white]",
        styles
      )}
    >
      {children}
    </button>
  );
});

export default Button;
