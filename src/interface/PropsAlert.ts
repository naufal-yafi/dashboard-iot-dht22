import { ReactNode } from "react";

interface PropsAlert {
  readonly status: string;
  readonly condition: string;
  is_loading?: boolean;
  children: ReactNode;
  count?: number;
}

export default PropsAlert;
