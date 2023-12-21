"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";

const Rules = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem isCurrent>
          <p className="font-bold">Rules</p>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          <Link href="/">
            <p className="text-black/50 hover:text-black">Dashboard</p>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/statistics">
            <p className="text-black/50 hover:text-black">Statistics</p>
          </Link>
        </BreadcrumbItem>
      </Breadcrumbs>

      <section className="mt-2">Development...</section>
    </>
  );
};

export default Rules;
