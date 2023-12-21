interface PropsMeasurement {
  readonly icon: string;
  readonly title: string;
  readonly range: string;
  readonly format: string;
  readonly total: number;
  readonly mean: number;
  readonly value: number;
  is_loading?: boolean;
}

export default PropsMeasurement;
