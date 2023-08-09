import Logo from "../components/Logo";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-main-col h-screen overflow-hidden">
      <div className="flex justify-between mx-[13.65vw] mt-[60px]">
        <Logo />
        <div className="absolute flex gap-5 top-5 right-5 sm:right-20 lg:right-30 2xl:right-40 2xl:top-8">
          <Button disabled={true}>Sign Up</Button>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-hl-col text-center text-[86px] leading-[83.5%] tracking-[-2.15px] font-[Telegraph] mt-[70px]">
          Bookmarks, <br />
          done right!
        </h3>

        <p className="font-[Lato] w-[383px] text-center mt-[22px] mx-auto text-[#578598]">
          Seamlessly mark your moments. Your perfect bookmarking companion for
          effortless organization and easy rediscovery.
        </p>

        <img
          className="mx-auto"
          src="src\Img\placeholder-sc.png"
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export default HomePage;
