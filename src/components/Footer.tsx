import { Divider } from "@nextui-org/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-6 lg:px-32 pt-2 pb-10">
      <Divider />
      <footer className="mt-6 text-center">
        <h1 className="font-medium text-sm">
          Copyright © 2023 Muhammad Naufal Yafi&apos;
        </h1>
        <p className="text-xs text-black/80 mt-2">
          This project is licensed under the MIT License - see the{" "}
          <span className="text-blue-500 underline">
            <Link
              href="https://github.com/naufal-yafi/dashboard-iot-dht22/blob/main/LICENSE"
              target="_blank"
            >
              LICENSE.md
            </Link>
          </span>{" "}
          file for details.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
