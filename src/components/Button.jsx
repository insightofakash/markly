import { forwardRef } from "react";

const Button = forwardRef(function Button({ children, disabled, props }, ref) {
  return (
    <button
      ref={ref}
      {...props}
      disabled={disabled}
      className={
        "text-white bg-hl-col disabled:hidden disabled:md:block disabled:bg-[#E6E6E6] disabled:text-stone-400 px-[26px] py-[10px] rounded-full"
      }
    >
      {children}
    </button>
  );
});

export default Button;
