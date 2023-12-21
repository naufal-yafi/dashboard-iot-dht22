import { ReactNode } from "react";

interface PropsAlert {
  status: string;
  condition: string;
  is_loading: boolean;
  children: ReactNode;
  count: number;
}

export default PropsAlert;
