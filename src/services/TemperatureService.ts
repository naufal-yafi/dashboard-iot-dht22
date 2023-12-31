import api from "@config/api";
import ServiceCalculate from "@interface/ServiceCalculate";
import { fixedOutputFloat } from "@lib/utils";
import TemperatureModel from "@model/TemperatureModel";

export const getAllTemperature = async (): Promise<TemperatureModel> => {
  const response = await fetch(`${api.url}${api.path.temperature}`, {
    cache: "no-cache",
    next: {
      revalidate: 25,
    },
  });
  return await response.json();
};

export const calculate = (datas: any): ServiceCalculate => {
  const LENGTH: number = datas.length - 1;
  const TEMPERATURE: number = datas[LENGTH].temperature;
  const HUMIDITY: number = datas[LENGTH].humidity;

  let countTemperature: number = 0;
  let countHumidity: number = 0;

  for (let item of datas) {
    countTemperature += item.temperature;
    countHumidity += item.humidity;
  }

  const calculateConditionStatus = calculateCondition(TEMPERATURE, HUMIDITY);

  return {
    total: LENGTH + 1,
    condition: calculateConditionStatus.condition,
    status: calculateConditionStatus.status,
    temperature: {
      value: TEMPERATURE,
      mean: fixedOutputFloat(countTemperature / (LENGTH + 1)),
    },
    humidity: {
      value: HUMIDITY,
      mean: fixedOutputFloat(countHumidity / (LENGTH + 1)),
    },
  };
};

const calculateCondition = (
  temperature: number,
  humidity: number,
): { condition: string; status: string } => {
  let condition: string = "";
  let status: string = "";

  if (
    temperature <= 10 ||
    temperature >= 35 ||
    humidity <= 30 ||
    humidity >= 80
  ) {
    status = "danger";

    if (temperature >= 35 && humidity >= 80) {
      condition = "moist";
    } else {
      condition = "dryness";
    }
  } else if (
    temperature < 18 ||
    temperature > 25 ||
    humidity < 50 ||
    humidity > 70
  ) {
    status = "warning";

    if (temperature > 25 && humidity > 70) {
      condition = "moist";
    } else {
      condition = "dryness";
    }
  } else {
    status = "ok";
    condition = "normal";
  }

  return {
    condition: condition,
    status: status,
  };
};
