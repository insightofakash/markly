import { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "This email does not exist, please try again" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const LoginForm = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleChange = (field) => {
    errors[field]?.message.splice(0, -1);
  };

  return (
    <form
      className="flex items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-12 relative">
        <input
          autoFocus
          className="rounded-lg w-[340px] h-[48px] px-5 border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
          placeholder="Enter your email here"
          {...register("email")}
          onChange={() => handleChange("email")}
        />
        {errors.email && (
          <p className="pl-2 pt-1 text-red-500 absolute">
            {errors.email?.message}
          </p>
        )}
      </div>
      <div className="flex flex-col justify-center relative">
        <div className="mb-14 relative">
          <input
            id="password"
            className="rounded-lg w-[340px] h-[48px] px-5 border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
            placeholder={`Enter your password here`}
            type={isShownPassword ? "text" : "password"}
            {...register("password")}
            onChange={() => handleChange("password")}
          />
          {errors.password && (
            <p className="pl-2 pt-1 text-red-500 absolute">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div
          className="absolute top-3.5 right-4 cursor-pointer"
          onClick={() => setIsShownPassword((s) => !s)}
        >
          {!isShownPassword ? (
            <BsEyeSlash className="opacity-20" size={23} />
          ) : (
            <BsEye className="opacity-40" size={23} />
          )}
        </div>
      </div>
      <div className="flex gap-3 mb-8">
        <p className="text-[#8C8C8C]">Don&lsquo;t have an account yet?</p>
        <Link to="/register" className="text-[#174674] hover:text-[#0b2239]">
          Register Now!
        </Link>
      </div>
      <button
        type="submit"
        className="bg-[#174674] px-[26px] py-[10px] rounded-full text-[white]"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
