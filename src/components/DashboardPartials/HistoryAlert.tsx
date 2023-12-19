"use client";

import useFetchApi from "@/hooks/useFetchApi";
import { formatClock, formatDate } from "@/lib/utils";
import { getAllHistory } from "@/service/HistoryService";
import CardHistoryAlert from "@component/CardHistoryAlert";
import ApiHistory from "@interface/ApiHistory";
import { Card, CardBody, CardHeader, ScrollShadow } from "@nextui-org/react";

const HistoryAlert = () => {
  const { loading, snapshot, error } = useFetchApi(getAllHistory);

  const ShowData = () => {
    return (
      <>
        {loading ? (
          "Loading..."
        ) : (
          <>
            {snapshot?.map((item: ApiHistory) => (
              <CardHistoryAlert
                key={item.id}
                humidity={item.humidity}
                temperature={item.temperature}
                is_danger={item.is_danger}
                clock={formatClock(item.datetime)}
                condition={item.condition}
                date={formatDate(item.datetime)}
              />
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <Card className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 flex-col items-start">
        <p className="text-tiny uppercase font-bold mt-1 bg-white">
          History Alert ({snapshot?.length ?? 0})
        </p>
      </CardHeader>
      <CardBody>
        <div className="pt-6">
          <ScrollShadow>{error ?? <ShowData />}</ScrollShadow>
        </div>
      </CardBody>
    </Card>
  );
};

export default HistoryAlert;
