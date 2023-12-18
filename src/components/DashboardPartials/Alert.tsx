import imgDanger from "@image/condition/danger.svg";
import imgSuccess from "@image/condition/success.svg";
import imgWarning from "@image/condition/warning.svg";
import PropsAlert from "@interface/PropsAlert";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const Alert = (props: PropsAlert) => {
  let background;

  if (props.status === "danger") {
    background = imgDanger;
  } else if (props.status === "warning") {
    background = imgWarning;
  } else {
    background = imgSuccess;
  }

  return (
    <div className="col-span-12 sm:col-span-4">
      <Card className="h-[150px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h1 className="text-tiny uppercase font-bold">Alert</h1>
          <p className="text-tiny">Condition</p>
          <p className="mt-2 text-center w-full uppercase font-bold text-white">
            {props.condition}
          </p>
        </CardHeader>
        <Image src={background} alt="bg" width={512} height={256} />
        <CardFooter className="absolute bg-black/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="text-white">
            <p className="text-tiny">Notifications.</p>
            <p className="text-tiny">You can stop siren.</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Button
              className="text-tiny"
              color="default"
              radius="full"
              size="sm"
              variant="bordered"
            >
              <p className="text-white">Test</p>
            </Button>
            <Button
              className="text-tiny"
              color="default"
              radius="full"
              size="sm"
            >
              Stop
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="h-[40px] mt-2">
        <CardHeader className="absolute z-10 flex gap-2 items-center h-[40px]">
          <h1 className="text-xs uppercase">Reload Time</h1>
          <p className="text-lg font-bold">{props.time}s</p>
        </CardHeader>
      </Card>
    </div>
  );
};

Alert.defaultProps = {
  status: "normal", // warning, danger
  condition: "normal", // dryness moist
  time: 0,
};

export default Alert;
