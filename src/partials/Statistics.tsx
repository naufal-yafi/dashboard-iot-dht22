"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Link from "next/link";

const Statistics = () => {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem isCurrent>
          <Link href="/rules">
            <p className="text-black/50 hover:text-black">Rules</p>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          <Link href="/">
            <p className="text-black/50 hover:text-black">Dashboard</p>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <p className="font-bold">Statistics</p>
        </BreadcrumbItem>
      </Breadcrumbs>

      <section className="mt-2">Development...</section>
    </>
  );
};

export default Statistics;
