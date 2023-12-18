import Alert from "./DashboardPartials/Alert";
import HistoryAlert from "./DashboardPartials/HistoryAlert";
import Measurement from "./DashboardPartials/Measurement";
import ReloadData from "./DashboardPartials/ReloadData";

const Dashboard = () => {
  return (
    <div className="gap-2 grid grid-cols-12 grid-rows-1 w-full py-4">
      <Alert />
      <Measurement title="Temperature" range="18 - 25" />
      <Measurement title="Humidity" format="%" range="50 - 70" />
      <ReloadData />
      <HistoryAlert />
    </div>
  );
};

export default Dashboard;
