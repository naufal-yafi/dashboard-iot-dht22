import Rules from "@partial/Rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rules | Hydroponic Monitoring",
};

const RulePage = () => {
  return (
    <main className="px-4 md:px-32 py-2">
      <Rules />
    </main>
  );
};

export default RulePage;
