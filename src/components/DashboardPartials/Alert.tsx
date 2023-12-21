import PropsAlert from "@interface/PropsAlert";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@nextui-org/react";

const Alert = (props: PropsAlert) => {
  let textColor: string = "";

  if (props.status.toLocaleLowerCase() == "danger") {
    textColor = "text-red-500";
  } else if (props.status == "warning") {
    textColor = "text-yellow-600";
  } else {
    textColor = "text-green-600";
  }

  return (
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h1 className="text-tiny uppercase font-bold">Alert</h1>
        <p className="text-tiny">Auto reload in {props.count}/10</p>
      </CardHeader>
      <CardBody className="mt-10 text-center">
        {props.is_loading ? (
          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <Skeleton className="h-8 w-2/3 rounded-full" />
            <Skeleton className="h-4 w-2/6 rounded-full" />
          </div>
        ) : (
          <p>
            <span className={`mt-2 uppercase font-bold text-2xl ${textColor}`}>
              {props.status}
            </span>{" "}
            <br />
            <span className="capitalize">{props.condition}</span>
          </p>
        )}
      </CardBody>
      <CardFooter className="absolute bg-white/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div className="text-black">
          <p className="text-tiny">Notifications.</p>
          <p className="text-tiny">You can stop siren.</p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          {props.is_loading ? (
            <>
              <Skeleton className="h-8 w-16 rounded-full" />
              <Skeleton className="h-8 w-16 rounded-full" />
            </>
          ) : (
            <>{props.children}</>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

Alert.defaultProps = {
  status: "ok", // warning, danger
  condition: "normal", // dryness moist
  is_loading: false,
  children: <></>,
  count: 0,
};

export default Alert;
