import Statistics from "@partial/Statistics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistics | Hydroponic Monitoring",
};

const StatisticPage = () => {
  return (
    <main className="px-4 md:px-32 py-2">
      <Statistics />
    </main>
  );
};

export default StatisticPage;
