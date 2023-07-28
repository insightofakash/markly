function Button({ children, active }) {
  return (
    <div>
      <button
        className={
          active
            ? "bg-hl-col px-[26px] py-[10px] rounded-full text-[white]"
            : "hidden md:block md:bg-[#E6E6E6] md:text-stone-400 px-[26px] py-[10px] rounded-full"
        }
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
