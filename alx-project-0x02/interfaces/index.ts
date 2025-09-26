export interface ButtonProps {
  title: string;
  styles: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full" ;
  className?: string;
}


export interface CardProps {
    title: string;
    content: string;
}