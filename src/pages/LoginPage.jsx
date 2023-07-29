import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { useUser } from "../hooks/useUser";
import { Navigate } from "react-router";
import NoPage from "./NoPage";

const LoginPage = () => {
    const { isAuthenticated, isLoading } = useUser();
    if (isLoading) return <NoPage />;
    if (isAuthenticated) return <Navigate to="/dashboard" />;
    return (
        <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-main-col relative">
            <Logo />
            <div className="absolute flex gap-5 top-5 right-5 sm:right-20 lg:right-30 2xl:right-40 2xl:top-8">
                <Button active={false}>Sign Up</Button>
                <Button active={false}>Login</Button>
            </div>
            <div className=" w-[100vw] h-[100vh] pt-[25vw] md:p-[64px] flex flex-col items-center bg-[#ECECEC] md:w-[481px] md:h-[692px] md:rounded-[64px] ">
                <h1 className="text-[#174674] text-5xl telegraph-custom">Sign in</h1>
                <p className="mt-[12px] text-[#578598] mb-[46px] lato-custom">Hey, enter your details to login</p>
                <LoginForm />
                <p className="mt-[56px] text-[#8C8C8C]">Or sign in with</p>
                <div className="flex mt-6 gap-10 opacity-[20%]">
                    <div className="h-[82px] w-[82px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
                        <AiOutlineGoogle size={62} />
                    </div>

                    <div className="h-[82px] w-[82px] bg-[#D9D9D9] rounded-full flex justify-center items-center">
                        <AiOutlineGithub size={62} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
