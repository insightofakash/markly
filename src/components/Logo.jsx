import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src={"Logo.svg"}
        className="absolute w-[120px] top-6 left-10 lg:left-20 2xl:left-40 2xl:top-8"
      />
    </Link>
  );
}

export default Logo;
