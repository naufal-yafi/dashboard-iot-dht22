"use client";

import { Button } from "@nextui-org/react";
import ServerError from "@partial/ServerError";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "500 Internal Server Error | Hydroponic Monitoring",
};

const InternalServerError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ServerError>
      <Link href="/">
        <Button color="primary" onClick={reset}>
          Refresh Page
        </Button>
      </Link>
    </ServerError>
  );
};

export default InternalServerError;
