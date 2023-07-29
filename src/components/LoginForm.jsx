import { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";
import { SyncLoader } from "react-spinners";

const schema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "This is not a valid email" }),

    password: z.string().min(1, { message: "Password is required" }),
});

const LoginForm = () => {
    const [isShownPassword, setIsShownPassword] = useState(false);
    const { login, isLoading, error: supabaseError } = useLogin();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
        login(data);
    };

    const handleShowPassword = () => {
        setIsShownPassword((s) => !s);

        // Have to use this code to bypass the ReactHookForm default functionality
        const input = document.querySelector("#password");
        setTimeout(() => {
            input.focus();
            input.setSelectionRange(input.value.length, input.value.length);
        }, 10);
    };

    return (
        <form
            className="flex items-center flex-col"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="mb-[34px] relative">
                <input
                    autoFocus
                    className="rounded-[12px] w-[340px] h-[48px] px-[18px] border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
                    placeholder="Enter your email here"
                    disabled={isLoading}
                    {...register("email")}
                />
                {errors.email || supabaseError ? (
                    <p className="pl-[26px] pt-[4px] text-red-500 absolute lato-custom text-[14px] font-bold">
                        {errors.email?.message || "Invalid password or email"}
                    </p>
                ) : null}
            </div>
            <div className="flex flex-col justify-center relative">
                <div className="mb-[34px] relative">
                    <input
                        id="password"
                        className="rounded-[12px] w-[340px] h-[48px] px-5 border border-[#B7B7B7] text-stone-600 focus:border-none focus:outline-none focus:ring-2 focus:ring-[#578598]"
                        placeholder={`Enter your password here`}
                        type={isShownPassword ? "text" : "password"}
                        disabled={isLoading}
                        {...register("password")}
                    />
                    {errors.password || supabaseError ? (
                        <p className="pl-[26px] pt-[4px] text-red-500 absolute lato-custom text-[14px] font-bold">
                            {errors.password?.message || "Invalid password or email"}
                        </p>
                    ) : null}
                </div>
                <div
                    className="absolute top-3.5 right-4 cursor-pointer"
                    onClick={handleShowPassword}
                >
                    {!isShownPassword ? (
                        <BsEyeSlash
                            className="opacity-20"
                            size={23}
                        />
                    ) : (
                        <BsEye
                            className="opacity-40"
                            size={23}
                        />
                    )}
                </div>
            </div>
            <div className="flex gap-[6px] mb-[46px] lato-custom">
                <p className="text-[#8C8C8C]">Don&lsquo;t have an account yet?</p>
                <Link
                    to="/register"
                    className="text-[#174674] hover:text-[#0b2239]"
                >
                    <strong>Register Now!</strong>
                </Link>
            </div>
            <button
                type="submit"
                className="focus:bg-[#10304f] bg-[#174674] px-[26px] py-[10px] rounded-full text-[white]"
            >
                {isLoading ? (
                    <SyncLoader
                        color="white"
                        size={10}
                    />
                ) : (
                    <span>Sign in</span>
                )}
            </button>
        </form>
    );
};

export default LoginForm;
