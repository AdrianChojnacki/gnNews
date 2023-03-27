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

export interface NewsListProps {
  country: string | string[] | undefined;
}

export interface NewsGridProps {
  news: object[];
}

export interface NewsCardProps {
  author: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
}
