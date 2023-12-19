interface ServiceCalculate {
  total: number;
  condition: string;
  status: string;
  time: Date;
  temperature: {
    value: number;
    mean: number;
  };
  humidity: {
    value: number;
    mean: number;
  };
}

export default ServiceCalculate;
