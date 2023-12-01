export declare type MuBtnType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "purple";
export declare type MuBtnSize = "large" | "medium" | "small" | "mini";
export declare type MuBtnShape = "circle" | "round" | "normal";
export declare type MuBtnIconPosition = "left" | "right";
export declare type MuBtnLoading = boolean;
export declare type MuBtnDisabled = boolean;
export declare type MuBtnBlock = boolean;
export declare type MuBtn = {
  type?: MuBtnType;
  size?: MuBtnSize;
  shape?: MuBtnShape;
  icon?: string;
  iconPosition?: MuBtnIconPosition;
  loading?: MuBtnLoading;
  disabled?: MuBtnDisabled;
  block?: MuBtnBlock;
  onClick?: (e: MouseEvent) => void;
};
