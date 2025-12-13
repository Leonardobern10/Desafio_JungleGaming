export type ButtonCardActionProps = {
  onClick?: () => void;
  buttonName: string;
  full?: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  fontSize?: "xs" | "sm" | "lg" | "xl";
};
