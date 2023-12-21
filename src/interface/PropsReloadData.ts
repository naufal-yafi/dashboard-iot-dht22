import { ReactNode } from "react";

interface PropsReloadData {
  readonly condition: string;
  children: ReactNode;
  is_loading?: boolean;
}

export default PropsReloadData;
