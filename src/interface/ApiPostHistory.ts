interface ApiPostHistory {
  readonly temperature: number;
  readonly humidity: number;
  readonly is_danger: boolean;
  readonly datetime: Date;
  readonly condition: string;
}
