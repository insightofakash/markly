import { Link } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useState } from "react";

const LoginForm = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);
  return (
    <div className="flex items-center flex-col gap-7">
      <input
        className="rounded-lg w-[340px] h-[48px] px-5 border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
        placeholder="Enter your email here"
      />
      <div className="flex items-center relative">
        <input
          className="rounded-lg w-[340px] h-[48px] px-5 border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
          placeholder={`Enter your password here`}
        />
        <div
          className="absolute right-4 opacity-[20%] cursor-pointer"
          onClick={() => setIsShownPassword((s) => !s)}
        >
          {!isShownPassword ? <BsEyeSlash size={23} /> : <BsEye size={23} />}
        </div>
      </div>
      <div className="flex gap-3">
        <p className="text-[#8C8C8C]">Don&lsquo;t have an account yet?</p>
        <Link to="/register" className="text-[#174674] hover:text-[#0b2239]">
          Register Now!
        </Link>
      </div>
      <button className="bg-[#174674] px-[26px] py-[10px] rounded-full text-[white]">
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
