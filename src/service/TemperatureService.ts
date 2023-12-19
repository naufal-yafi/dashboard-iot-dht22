import ApiTemperature from "@interface/ApiTemperature";
import ServiceCalculate from "@interface/ServiceCalculate";

export const getAllTemperature = async (): Promise<ApiTemperature> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/iot`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  });
  return await response.json();
};

export const calculate = (datas: any): ServiceCalculate => {
  const LENGTH: number = datas.length - 1;
  const TEMPERATURE = datas[LENGTH].temperature;
  const HUMIDITY = datas[LENGTH].humidity;

  let countTemperature: number = 0;
  let countHumidity: number = 0;

  for (let item of datas) {
    countTemperature += item.temperature;
    countHumidity += item.humidity;
  }

  return {
    total: LENGTH + 1,
    condition: "",
    status: "",
    temperature: {
      value: TEMPERATURE,
      mean: countTemperature / (LENGTH + 1),
    },
    humidity: {
      value: HUMIDITY,
      mean: countHumidity / (LENGTH + 1),
    },
  };
};
