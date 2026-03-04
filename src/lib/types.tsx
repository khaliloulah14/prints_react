import type react from 'react';

export interface logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface MenuItem {
  label: string;
  link: string;
  icon?: react.ReactNode;
  subMenu?: MenuItem[];
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  showArrow?: boolean;
  variant?: 'outline' | 'filled';
}

export interface TitleSectionProps {
    title: string;
    description?: string;
    button: ButtonProps;
}

export interface CardProps {
    title: string;
    description: string;
    icon?: react.ReactNode;
    id?: number;
}

 