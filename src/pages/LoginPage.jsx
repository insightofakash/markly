import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useUser } from "../hooks/useUser";
import { Navigate } from "react-router";
import LoadingPage from "./LoadingPage";

const LoginPage = () => {
  const { isAuthenticated, isLoading } = useUser();
  if (isLoading) return <LoadingPage />;
  if (isAuthenticated) return <Navigate to="/dashboard" />;
  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-main-col relative">
      <Logo />
      <div className="absolute flex gap-5 top-5 right-5 sm:right-20 lg:right-30 2xl:right-40 2xl:top-8">
        <Button disabled={true}>Sign Up</Button>
        <Button disabled={true}>Login</Button>
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
