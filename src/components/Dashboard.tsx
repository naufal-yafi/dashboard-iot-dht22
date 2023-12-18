import iconHumidity from "@image/humidity-icon.svg";
import iconTemperature from "@image/temperature-icon.svg";
import Alert from "./DashboardPartials/Alert";
import HistoryAlert from "./DashboardPartials/HistoryAlert";
import Measurement from "./DashboardPartials/Measurement";
import ReloadData from "./DashboardPartials/ReloadData";

const Dashboard = () => {
  return (
    <div className="gap-2 grid grid-cols-12 grid-rows-1 w-full py-4">
      <Alert />
      <Measurement icon={iconTemperature} title="Temperature" range="18 - 25" />
      <Measurement
        icon={iconHumidity}
        title="Humidity"
        format="%"
        range="50 - 70"
      />
      <ReloadData />
      <HistoryAlert />
    </div>
  );
};

export default Dashboard;
