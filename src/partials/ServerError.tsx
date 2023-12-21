import { ReactNode } from "react";

const ServerError = (props: { message?: string; children: ReactNode }) => {
  return (
    <main className="w-full h-[50vh] flex flex-col justify-center items-center gap-8 px-6 md:px-24 lg:px-32">
      <hgroup className="text-center flex flex-col justify-center items-center">
        <h2 className="text-sm font-bold text-red-600">
          500 Internal Server Error
        </h2>
        <h1 className="text-4xl font-bold capitalize">{props.message}</h1>
        <p className="mt-5 text-sm text-black/70 w-full md:w-2/3">
          Wait for some time and refresh the page.
        </p>
      </hgroup>

      {props.children}
    </main>
  );
};

ServerError.defaultProps = {
  message: "Something went wrong!",
};

export default ServerError;
