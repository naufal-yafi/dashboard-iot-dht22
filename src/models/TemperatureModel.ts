interface TemperatureModel {
  readonly temperature: number;
  readonly humidity: number;
  readonly id?: string | number;
}

export default TemperatureModel;
