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
  let condition: string = "";
  let status: string = "";

  for (let item of datas) {
    countTemperature += item.temperature;
    countHumidity += item.humidity;
  }

  if (TEMPERATURE <= 8 && HUMIDITY >= 80) {
    condition = "moist";
    status = "danger";
  } else if (TEMPERATURE <= 13 && HUMIDITY >= 75) {
    condition = "moist";
    status = "warning";
  } else if (TEMPERATURE <= 35 && HUMIDITY >= 40) {
    condition = "dryness";
    status = "danger";
  } else if (TEMPERATURE <= 30 && HUMIDITY >= 45) {
    condition = "dryness";
    status = "warning";
  } else {
    condition = "normal";
    status = "ok";
  }

  return {
    total: LENGTH + 1,
    condition: condition,
    status: status,
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
