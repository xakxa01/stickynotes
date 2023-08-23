export type TColor =
  | 'primary'
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | undefined;

export type TVariant = 'underlined' | 'flat' | 'faded' | 'bordered' | undefined;

export interface IdefaultInputConfig {
  isRequired: boolean;
  className: string;
  variant: TVariant;
  color: TColor;
}
