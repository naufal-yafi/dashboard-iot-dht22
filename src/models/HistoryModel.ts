interface HistoryModel {
  readonly temperature: number;
  readonly humidity: number;
  readonly is_danger: boolean;
  readonly datetime: string;
  readonly condition: string;
  readonly id?: string | number;
}

export default HistoryModel;
