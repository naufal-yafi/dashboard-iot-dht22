import PropsAlert from "@interface/PropsAlert";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

const Alert = (props: PropsAlert) => {
  let textColor: string = "";

  if (props.status === "danger") {
    textColor = "text-red-500";
  } else if (props.status === "warning") {
    textColor = "text-yellow-600";
  } else {
    textColor = "text-green-600";
  }

  return (
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h1 className="text-tiny uppercase font-bold">Alert</h1>
        <p className="text-tiny">Condition</p>
      </CardHeader>
      <CardBody className="mt-10 text-center">
        <p className={`mt-2 uppercase font-bold text-2xl ${textColor}`}>
          {props.status}
        </p>
        <p className="capitalize">{props.condition}</p>
      </CardBody>
      <CardFooter className="absolute bg-white/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div className="text-black">
          <p className="text-tiny">Notifications.</p>
          <p className="text-tiny">You can stop siren.</p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <Button
            className="text-tiny"
            color="default"
            radius="full"
            size="sm"
            variant="flat"
          >
            <p className="text-black/80">Test</p>
          </Button>
          <Button className="text-tiny" color="danger" radius="full" size="sm">
            Stop
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

Alert.defaultProps = {
  status: "success", // warning, danger
  condition: "normal", // dryness moist
  is_loading: true,
};

export default Alert;
