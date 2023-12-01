export declare type MuAlertType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "purple";

export declare type MuAlertClosable = boolean;
export declare type MuAlertIcon = string;
export declare type MuAlert = {
  type?: MuAlertType;
  closable?: MuAlertClosable;
  icon?: MuAlertIcon;
};
