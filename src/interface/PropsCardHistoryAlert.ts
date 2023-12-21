interface PropsCardHistoryAlert {
  readonly clock: string;
  readonly date: string;
  readonly temperature: number;
  readonly humidity: number;
  is_danger: boolean;
  condition: string;
  is_loading?: boolean;
}

export default PropsCardHistoryAlert;
