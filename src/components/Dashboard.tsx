"use client";

import useFetchApi from "@hook/useFetchApi";
import useSiren from "@hook/useSiren";
import iconHumidity from "@image/humidity-icon.svg";
import iconTemperature from "@image/temperature-icon.svg";
import { Button } from "@nextui-org/react";
import { calculate, getAllTemperature } from "@service/TemperatureService";
import { useRef } from "react";
import Alert from "./DashboardPartials/Alert";
import HistoryAlert from "./DashboardPartials/HistoryAlert";
import Measurement from "./DashboardPartials/Measurement";
import ReloadData from "./DashboardPartials/ReloadData";
import ErrorBar from "./ErrorBar";
import LoadingDashboard from "./LoadingDashboard";

const Dashboard = () => {
  const documentAudio = useRef<HTMLAudioElement | null>(null);
  const { loading, snapshot, error, updateSnapshot } =
    useFetchApi(getAllTemperature);
  const { playSiren, stopSiren, errorSiren } = useSiren(documentAudio.current);

  if (loading) return <LoadingDashboard />;
  if (error) return <>{error}</>;

  const data = calculate(snapshot);

  return (
    <>
      {errorSiren && <ErrorBar>{errorSiren}</ErrorBar>}
      {error && <ErrorBar>{error}</ErrorBar>}
      <section className="gap-2 grid grid-cols-12 grid-rows-1 w-full py-4">
        <Alert
          status={data.status}
          condition={data.condition}
          is_loading={false}
        >
          <Button
            className="text-tiny"
            color="default"
            radius="full"
            size="sm"
            variant="flat"
            onClick={() => playSiren()}
          >
            <p className="text-black/80">Test</p>
          </Button>
          <Button
            className="text-tiny"
            color="danger"
            radius="full"
            size="sm"
            onClick={stopSiren}
          >
            Stop
          </Button>
        </Alert>
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
        <audio ref={documentAudio} src="/siren.mp3"></audio>
      </section>
    </>
  );
};

export default Dashboard;
