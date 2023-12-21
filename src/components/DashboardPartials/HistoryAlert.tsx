"use client";

import CardHistoryAlert from "@component/CardHistoryAlert";
import useFetchApi from "@hook/useFetchApi";
import ApiHistory from "@interface/ApiHistory";
import { formatClock, formatDate } from "@lib/utils";
import {
  Card,
  CardBody,
  CardHeader,
  ScrollShadow,
  Skeleton,
} from "@nextui-org/react";
import { getAllHistory } from "@service/HistoryService";

const HistoryAlert = (props: { is_loading: boolean }) => {
  const { loading, snapshot, error } = useFetchApi(getAllHistory);

  const ShowData = () => {
    return (
      <>
        {loading ? (
          <LoadingData />
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

  const LoadingData = () => {
    return (
      <>
        <CardHistoryAlert is_loading={true} />
        <CardHistoryAlert is_loading={true} />
        <CardHistoryAlert is_loading={true} />
        <CardHistoryAlert is_loading={true} />
        <CardHistoryAlert is_loading={true} />
      </>
    );
  };

  return (
    <Card className="w-full h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 flex-col items-start">
        {props.is_loading ? (
          <div className="text-tiny uppercase font-bold mt-1 bg-white flex">
            History Alert (<Skeleton className="w-5 h-4 rounded-full" />)
          </div>
        ) : (
          <p className="text-tiny uppercase font-bold mt-1 bg-white">
            History Alert ({snapshot?.length})
          </p>
        )}
      </CardHeader>
      <CardBody>
        <div className="pt-6">
          <ScrollShadow>
            {props.is_loading ? <LoadingData /> : <>{error ?? <ShowData />}</>}
          </ScrollShadow>
        </div>
      </CardBody>
    </Card>
  );
};

HistoryAlert.defaultProps = {
  is_loading: false,
};

export default HistoryAlert;
