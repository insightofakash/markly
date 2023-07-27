import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "You must enter a valid email" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .regex(/^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z]).{8,}$/, {
      message:
        "Password must have at least:\n- one Uppercase Character\n- one Special Character\n- eight characters",
    }),
});

const LoginForm = () => {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (errors.email || errors.password) {
      const message = `${
        errors.email?.message ? `${errors.email?.message}\n` : ""
      }${errors.password?.message ? `${errors.password?.message}\n` : ""}`;
      toast.error(message);
    }
  }, [errors]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      className="flex items-center flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 relative">
        <input
          autoFocus
          className="rounded-lg w-[340px] h-[48px] px-5 border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
          placeholder="Enter your email here"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col justify-center relative">
        <div className="mb-12 relative">
          <input
            className="rounded-lg w-[340px] h-[48px] px-5 border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
            placeholder={`Enter your password here`}
            type={isShownPassword ? "text" : "password"}
            {...register("password")}
          />
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
