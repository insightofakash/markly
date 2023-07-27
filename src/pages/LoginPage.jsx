import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-[#FAFFFC] relative">
      <img
        src={"Logo.svg"}
        className="absolute w-[120px]  top-6 left-10 lg:left-20 2xl:left-40 2xl:top-8"
      />
      <div className="absolute flex gap-5 top-5 right-5 sm:right-20 lg:right-30 2xl:right-40 2xl:top-8">
        <button className="hidden md:block md:bg-[#E6E6E6] md:text-stone-400 px-[26px] py-[10px] rounded-full">
          Sign Up
        </button>
        <button className="hidden md:block md:bg-[#E6E6E6] md:text-stone-400 px-[26px] py-[10px] rounded-full">
          Login
        </button>
      </div>
      <div className=" w-[100vw] h-[100vh] pt-[25vw] md:pt-20 flex flex-col items-center bg-[#ECECEC] md:w-[500px] md:h-[700px] md:rounded-[64px] p-20">
        <h1 className="text-[#174674] text-5xl">Sign in!</h1>
        <p className="mt-8 text-[#578598] mb-12">
          Hey, enter your details to login
        </p>
        <LoginForm />
        <p className="mt-8 text-[#8C8C8C]">Or sign in with</p>
        <div className="flex mt-6 gap-10">
          <AiOutlineGoogle size={70} className="opacity-[20%]" />
          <AiOutlineGithub size={70} className="opacity-[20%]" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
