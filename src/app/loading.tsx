import { CircularProgress } from "@nextui-org/react";

const LoadingPage = () => {
  return (
    <main className="px-6 lg:px-32 w-full h-screen flex flex-col gap-3 text-sm text-black/80 justify-center items-center">
      <CircularProgress aria-label="Loading..." />
      Loading... Please Wait
    </main>
  );
};

export default LoadingPage;
