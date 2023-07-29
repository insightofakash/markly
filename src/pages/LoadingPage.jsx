import { FadeLoader } from "react-spinners";

// TODO: Make a skeleton later
const LoadingPage = () => {
  return (
    <div className="flex w-[100vw] h-[100vh]  items-center justify-center bg-main-col">
      <FadeLoader className="w-[300px] h-[300px]" size={300} color="#174674" />
    </div>
  );
};

export default LoadingPage;
