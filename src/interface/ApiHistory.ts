interface ApiHistory {
  readonly temperature: number;
  readonly humidity: number;
  readonly is_danger: boolean;
  readonly datetime: string;
  readonly condition: string;
  readonly id: string;
}

export default ApiHistory;
