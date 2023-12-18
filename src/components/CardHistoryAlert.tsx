import iconHumidity from "@image/humidity-icon.svg";
import iconTemperature from "@image/temperature-icon.svg";
import PropsCardHistoryAlert from "@interface/PropsCardHistoryAlert";
import { Chip } from "@nextui-org/react";
import Image from "next/image";

const CardHistoryAlert = (props: PropsCardHistoryAlert) => {
  return (
    <div className="w-full border-b-1 py-3">
      <hgroup className="flex w-full justify-between">
        <h2 className="flex items-center gap-2">
          <span className="font-bold text-xl">{props.clock}</span>
          <span className="text-xs">{props.date}</span>
        </h2>
        <Chip size="sm" color={props.is_danger ? "danger" : "warning"}>
          {props.is_danger ? "Danger" : "Warning"}
        </Chip>
      </hgroup>

      <p className="flex gap-4">
        <span className="text-sm mt-2 flex gap-2 font-medium">
          <Image
            src={iconTemperature}
            alt="temperature"
            width={24}
            height={24}
            className="w-[20px]"
          />
          {props.temperature}°C
        </span>
        <span className="text-sm mt-2 flex gap-2 font-medium">
          <Image
            src={iconHumidity}
            alt="humidity"
            width={24}
            height={24}
            className="w-[20px]"
          />
          {props.humidity}%
        </span>
      </p>
    </div>
  );
};

CardHistoryAlert.defaultProps = {
  clock: "clock",
  date: "date",
  temperature: 0,
  humidity: 0,
  is_danger: true,
};

export default CardHistoryAlert;
