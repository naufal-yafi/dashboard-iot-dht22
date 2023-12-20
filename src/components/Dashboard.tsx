"use client";

import useFetchApi from "@hook/useFetchApi";
import iconHumidity from "@image/humidity-icon.svg";
import iconTemperature from "@image/temperature-icon.svg";
import { Button } from "@nextui-org/react";
import { calculate, getAllTemperature } from "@service/TemperatureService";
import Alert from "./DashboardPartials/Alert";
import HistoryAlert from "./DashboardPartials/HistoryAlert";
import Measurement from "./DashboardPartials/Measurement";
import ReloadData from "./DashboardPartials/ReloadData";

const Dashboard = () => {
  const { loading, snapshot, error, updateSnapshot } =
    useFetchApi(getAllTemperature);

  if (loading) return <>Loading...</>;
  if (error) return <>{error}</>;

  const data = calculate(snapshot);

  return (
    <div className="gap-2 grid grid-cols-12 grid-rows-1 w-full py-4">
      <Alert
        status={data.status}
        condition={data.condition}
        is_loading={false}
      />
      <Measurement
        icon={iconTemperature}
        title="Temperature"
        range="18 - 25"
        value={data.temperature.value}
        mean={data.temperature.mean}
        total={data.total}
      />
      <Measurement
        icon={iconHumidity}
        title="Humidity"
        format="%"
        range="50 - 70"
        value={data.humidity.value}
        mean={data.humidity.mean}
        total={data.total}
      />
      <ReloadData condition={data.condition}>
        <Button
          className="text-tiny"
          color="primary"
          radius="full"
          size="sm"
          onClick={updateSnapshot}
        >
          Reload
        </Button>
      </ReloadData>
      <HistoryAlert />
    </div>
  );
};

export default Dashboard;
