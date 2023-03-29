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

export interface NewsListProps {
  country: string | string[] | undefined;
}

export interface NewsGridProps {
  news: object[];
}

export interface NewsCardProps {
  urlToImage: string;
  title: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  publishedAt: string;
  content: string;
  author: string;
  url: string;
}

export interface NewsModalProps {
  title: string;
  content: string;
  author: string;
  url: string;
  isOpen: boolean;
  onClose: () => void;
}
