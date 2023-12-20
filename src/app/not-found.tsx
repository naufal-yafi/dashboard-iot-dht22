import { Button } from "@nextui-org/react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found | Hydroponic Monitoring",
};

const PageNotFound = () => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-8 px-6 md:px-24 lg:px-32">
      <hgroup className="text-center flex flex-col justify-center items-center">
        <h2 className="text-sm font-bold text-red-600">404 Not Found</h2>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="mt-5 text-sm text-black/70 w-full md:w-2/3">
          To return to the dashboard, ensure that you have rechecked the entered
          URL to confirm there are no typographical errors or that the page
          indeed exists.
        </p>
      </hgroup>

      <Link href="/">
        <Button color="primary">Back to Dashboard</Button>
      </Link>
    </main>
  );
};

export default PageNotFound;
