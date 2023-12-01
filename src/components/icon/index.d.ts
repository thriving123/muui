export declare type MuIconType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "purple";
export declare type MuIconName = string;
export declare type MuIconSize = string;
export declare type MuIconColor = string;
export declare type MuIcon = {
  type?: MuIconType;
  name: MuIconName;
  color?: MuIconColor;
  size?: MuIconSize;
  loading?: boolean;
};
