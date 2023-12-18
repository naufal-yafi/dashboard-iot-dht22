import CardHistoryAlert from "@component/CardHistoryAlert";
import { Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";

const HistoryAlert = () => {
  return (
    <Card className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 flex-col items-start">
        <p className="text-tiny uppercase font-bold mt-1 bg-white">
          History Alert
        </p>
      </CardHeader>
      <CardBody>
        <div className="pt-6">
          <ScrollShadow>
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert is_danger={false} />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
            <CardHistoryAlert />
          </ScrollShadow>
        </div>
      </CardBody>
    </Card>
  );
};

export default HistoryAlert;
