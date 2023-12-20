import { ReactNode } from "react";

interface PropsAlert {
  status: string;
  condition: string;
  is_loading: boolean;
  children: ReactNode;
}

export default PropsAlert;
