import type react from "react";

export interface loginPost {
  username: string;
  password: string;
}

export interface loginGet{
    accessToken: string;
    refreshToken: string;
    user: {
        username: string,
        email: string
    }
}

export interface signUpPost{
    username: string,
    password: string,
    email: string
}

export interface signUpGet {
    user: {
        username: string,
        email: string
    }
}

export interface editProductPost {
    name: string;
    price: number;
    description: string;
    image: File | null;
}


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
  variant?: "outline" | "filled";
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

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  reduced?: number;
}

export interface Category {
  id: number;
  name: string;
}
