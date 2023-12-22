"use client";

import Alert from "@component/DashboardPartials/Alert";
import HistoryAlert from "@component/DashboardPartials/HistoryAlert";
import Measurement from "@component/DashboardPartials/Measurement";
import ReloadData from "@component/DashboardPartials/ReloadData";
import ErrorBar from "@component/ErrorBar";
import LoadingDashboard from "@component/LoadingDashboard";
import useFetchApi from "@hook/useFetchApi";
import useSiren from "@hook/useSiren";
import iconHumidity from "@image/humidity-icon.svg";
import iconTemperature from "@image/temperature-icon.svg";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import { calculate, getAllTemperature } from "@service/TemperatureService";
import Link from "next/link";
import { useEffect, useState } from "react";
import ServerError from "./ServerError";

const Dashboard = () => {
  const { loading, snapshot, error, updateSnapshot } =
    useFetchApi(getAllTemperature);
  const { playSiren, stopSiren, errorSiren } = useSiren();
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    if (loading) return;
    const data = calculate(snapshot);
    if (data.status === "danger") playSiren();
  }, [loading, snapshot, playSiren]);

  useEffect(() => {
    const timeReload = setInterval(() => {
      updateSnapshot();
    }, 30000);

    return () => {
      clearInterval(timeReload);
    };
  }, []);

  useEffect(() => {
    let countTime = 1;
    const countDown = setInterval(() => {
      setCount(countTime);

      if (countTime > 30) {
        setCount(1);
        countTime = 1;
      } else {
        countTime++;
      }
    }, 1000);

    return () => {
      clearInterval(countDown);
    };
  }, []);

  if (loading) return <LoadingDashboard />;
  if (error)
    return (
      <ServerError message={error}>
        <Link href="/">
          <Button color="primary" onClick={updateSnapshot}>
            Refresh Page
          </Button>
        </Link>
      </ServerError>
    );

  const data = calculate(snapshot);

  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem>
          <Link href="/rules">
            <p className="text-black/50 hover:text-black">Rules</p>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrent>
          <p className="font-bold">Dashboard</p>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/statistics">
            <p className="text-black/50 hover:text-black">Statistics</p>
          </Link>
        </BreadcrumbItem>
      </Breadcrumbs>
      {errorSiren && <ErrorBar>{errorSiren}</ErrorBar>}
      {error && <ErrorBar>{error}</ErrorBar>}
      <section className="gap-2 grid grid-cols-12 grid-rows-1 w-full py-4">
        <Alert
          status={data.status}
          condition={data.condition}
          is_loading={false}
          count={count}
        >
          <Button
            className="text-tiny"
            color="default"
            radius="full"
            size="sm"
            variant="flat"
            onClick={() => playSiren()}
          >
            <p className="text-black/80">Test Siren</p>
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
      </section>
    </>
  );
};

export default Dashboard;
