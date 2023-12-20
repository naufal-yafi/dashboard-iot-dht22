import { vt323 } from "@config/fonts";
import PropsMeasurement from "@interface/PropsMeasurement";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const Measurement = (props: PropsMeasurement) => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny uppercase font-bold flex items-center gap-2">
          <Image src={props.icon} alt="icon" width={20} height={20} />
          {props.title}
        </p>
      </CardHeader>
      <CardBody className="mt-10 flex justify-between">
        <div
          className={`bg-[#72AC8A] border-2 border-[#3F6C51] px-2 flex justify-between items-center rounded-lg ${vt323.className}`}
        >
          <h2 className="font-bold text-6xl">
            {props.value}
            <span className="text-3xl">{props.format}</span>
          </h2>
          <p className="flex flex-col">
            <span>normal</span>
            <span className="text-xl font-bold">{props.range}</span>
          </p>
        </div>

        <p className="text-sm">
          <span>Totaling {props.total} data</span> <br />
          <span>
            Mean {props.mean}
            {props.format}
          </span>
        </p>
      </CardBody>
    </Card>
  );
};

Measurement.defaultProps = {
  icon: "",
  title: "Your Title",
  range: "0 - 0",
  format: "°C",
  total: 0,
  mean: 0,
  value: 0,
};

export default Measurement;
