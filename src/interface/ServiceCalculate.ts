interface ServiceCalculate {
  readonly total: number;
  readonly condition: string;
  readonly status: string;
  readonly temperature: {
    readonly value: number;
    readonly mean: number;
  };
  readonly humidity: {
    readonly value: number;
    readonly mean: number;
  };
}

export default ServiceCalculate;
