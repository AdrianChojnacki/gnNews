import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface LayoutHeaderProps {
  showLayoutButton: boolean;
}

export interface LayoutBodyProps extends LayoutProps {
  showSidebar: boolean;
}

export interface LayoutFooterProps {
  showNewsAmount: boolean;
}

export interface Country {
  name: string;
  id: string;
  flag: { src: string };
}

export interface Countries {
  countries: Country[];
}

export interface NewsListProps {
  country: string | string[] | undefined;
}

export interface NewsGridProps {
  news: object[];
}

export interface NewsModalProps {
  title: string;
  content: string;
  author: string;
  url: string;
  isOpen: boolean;
  onClose: () => void;
}

export interface OnlyStrings {
  [key: string]: string;
}

export interface Source {
  source: {
    [key: string]: string;
  };
}

export interface LayoutState {
  layout: {
    layout: string;
  };
}

export interface NewsState {
  news: object[];
  status: string;
  error: unknown;
}

export interface NewsSelector {
  news: {
    news: object[];
    status: string;
    error: any;
  };
}
