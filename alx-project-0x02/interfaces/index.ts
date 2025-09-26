export interface ButtonProps {
  title: string;
  styles: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  title: string;
  content: string;
  id?: number;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: Omit<CardProps, "id">) => void;
}

export interface PostProps {
  id?: number;
  userId: number;
  title: string;
  content: string;
}
export interface UserProps {
  
  id?: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}
