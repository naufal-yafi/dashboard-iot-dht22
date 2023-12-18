import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";

const Alert = () => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny uppercase font-bold">Alert</p>
        <h3 className="flex gap-1 mt-1">
          <Chip color="warning" variant="flat" size="sm">
            Warning
          </Chip>
          <Chip color="danger" variant="flat" size="sm">
            Danger
          </Chip>
        </h3>
      </CardHeader>
      <CardBody className="flex justify-center items-center"></CardBody>
      <CardFooter className="absolute bg-white/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-tiny">Notifications.</p>
          <p className="text-tiny">You can stop siren.</p>
        </div>
        <Button
          className="text-tiny"
          color="default"
          radius="full"
          size="sm"
          variant="faded"
          disabled
        >
          Stop
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Alert;
