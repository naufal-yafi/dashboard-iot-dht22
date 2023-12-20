import iconHumidity from "@image/humidity-icon.svg";
import iconTemperature from "@image/temperature-icon.svg";
import { Skeleton } from "@nextui-org/react";
import Alert from "./DashboardPartials/Alert";
import HistoryAlert from "./DashboardPartials/HistoryAlert";
import Measurement from "./DashboardPartials/Measurement";
import ReloadData from "./DashboardPartials/ReloadData";

const LoadingDashboard = () => {
  return (
    <div className="gap-2 grid grid-cols-12 grid-rows-1 w-full py-4">
      <Alert is_loading={true} />
      <Measurement
        icon={iconTemperature}
        title="Temperature"
        is_loading={true}
      />
      <Measurement
        icon={iconHumidity}
        title="Humidity"
        format="%"
        is_loading={true}
      />
      <ReloadData is_loading={true}>
        <Skeleton className="h-8 w-16 rounded-full" />
      </ReloadData>
      <HistoryAlert is_loading={true} />
    </div>
  );
};

export default LoadingDashboard;
