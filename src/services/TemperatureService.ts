import api from "@config/api";
import ApiTemperature from "@interface/ApiTemperature";
import ServiceCalculate from "@interface/ServiceCalculate";
import { fixedOutputFloat } from "@lib/utils";

export const getAllTemperature = async (): Promise<ApiTemperature> => {
  const response = await fetch(`${api.url}${api.path.temperature}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
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

const calculateCondition = (temperature: number, humidity: number) => {
  let condition: string = "";
  let status: string = "";

  if (temperature > 18 && temperature < 25 && humidity > 50 && humidity < 70) {
    condition = "normal";
    status = "ok";
  } else if (temperature > 35 && humidity > 80) {
    condition = "moist";
    status = "danger";
  } else if (temperature > 25 && humidity > 70) {
    condition = "moist";
    status = "warning";
  } else if (temperature < 18 && humidity < 50) {
    condition = "dryness";
    status = "warning";
  } else if (temperature < 10 && humidity < 30) {
    condition = "dryness";
    status = "danger";
  } else {
    console.log("Kondisi tidak terpenuhi");
  }

  return {
    condition: condition,
    status: status,
  };
};
