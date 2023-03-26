import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface LayoutBodyProps extends LayoutProps {
  hasSidebar: boolean;
}

export interface Country {
  name: string;
  id: string;
  flag: { src: string };
}
