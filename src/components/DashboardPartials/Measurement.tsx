import { vt323 } from "@config/fonts";
import PropsMeasurement from "@interface/PropsMeasurement";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const Measurement = (props: PropsMeasurement) => {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[200px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny uppercase font-bold">{props.title}</p>
      </CardHeader>
      <CardBody className="mt-10 flex justify-between">
        <div
          className={`bg-[#72AC8A] border-2 border-[#3F6C51] px-2 flex justify-between items-center rounded-lg ${vt323.className}`}
        >
          <h2 className="font-bold text-6xl">
            {props.value}
            <span className="text-3xl">{props.format}</span>
          </h2>
          <p>
            <span>normal</span>
            <br />
            <span className="text-xl font-bold">{props.range}</span>
          </p>
        </div>

        <p className="text-xs">
          Automatic data reload within {props.reload_time}s
        </p>
      </CardBody>
    </Card>
  );
};

Measurement.defaultProps = {
  title: "Your Title",
  range: "0 - 0",
  format: "°C",
  reload_time: 0,
  value: 0,
};

export default Measurement;
